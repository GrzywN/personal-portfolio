import React from 'react';
import { createClient, EntryCollection } from 'contentful';
import {
  IPageBlogPost,
  IPageBlogPostFields,
  IBlogPosts,
  IBlogPostsFields,
  LOCALE_CODE,
} from '../../types/generated/contentful';

import Meta from '../../components/Meta';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Section from '../../components/Section';
import { Article, ArticleSkeleton } from '../../components/Article';
import Footer from '../../components/Footer';

type BlogPostPageProps = {
  pageContent: IPageBlogPost;
  blogPostContent: IBlogPosts;
  locale: LOCALE_CODE;
};

function BlogPostPage({
  pageContent,
  blogPostContent,
  locale,
}: BlogPostPageProps) {
  if (pageContent == null || blogPostContent == null) {
    return (
      <>
        <Meta
          title={`
            ${locale === 'pl-PL' ? 'Ładowanie...' : ''}
            ${locale === 'en-US' ? 'Loading...' : ''}
          `}
          locale={locale}
        />
        <Container className="px-8 pt-48 lg:pb-48">
          <Section>
            <ArticleSkeleton />
          </Section>
        </Container>
      </>
    );
  }

  const { navbar, footer } = pageContent.fields;
  const { title, content } = blogPostContent.fields;

  return (
    <>
      <Meta title={title} locale={locale} />
      <Navbar content={navbar} />
      <Container className="px-8 pt-48 lg:pb-48">
        <Section>
          <Article title={title} content={content} />
        </Section>
      </Container>
      <Footer content={footer} />
    </>
  );
}

const space = process.env.CONTENTFUL_SPACE_ID!;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;
const client = createClient({ space, accessToken });

async function getStaticPaths({ locales }: { locales: string[] }) {
  const { items } = (await client.getEntries({
    content_type: 'blogPosts',
  })) as EntryCollection<IBlogPostsFields>;

  const paths = locales
    .map((locale) => {
      return items.map((item) => {
        return {
          params: {
            slug: item.fields.slug,
          },
          locale,
        };
      });
    })
    .flat();

  return {
    paths,
    fallback: true,
  };
}

type getStaticPropsContext = {
  params: { slug: string };
  locale: string;
};

async function getStaticProps({ params, locale }: getStaticPropsContext) {
  const pageContent = (await client.getEntries({
    content_type: 'pageBlogPost',
    locale,
  })) as EntryCollection<IPageBlogPostFields>;

  const blogPostContent = (await client.getEntries({
    content_type: 'blogPosts',
    'fields.slug': params.slug,
    locale,
  })) as EntryCollection<IBlogPostsFields>;

  if (!blogPostContent.items.length) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  return {
    props: {
      pageContent: pageContent.items[0],
      blogPostContent: blogPostContent.items[0],
      locale,
    },
    revalidate: 1200,
  };
}

export { getStaticPaths, getStaticProps };
export default BlogPostPage;
