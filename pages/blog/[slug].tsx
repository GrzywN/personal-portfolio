import React from 'react';
import { createClient, EntryCollection } from 'contentful';
import {
  IPageBlogPost,
  IPageBlogPostFields,
  IBlogPosts,
  IBlogPostsFields,
} from '../../types/generated/contentful';

import Meta from '../../components/Meta';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Article from '../../components/Article';
import Footer from '../../components/Footer';

type BlogPostPageProps = {
  pageContent: IPageBlogPost;
  blogPostContent: IBlogPosts;
};

function BlogPostPage({ pageContent, blogPostContent }: BlogPostPageProps) {
  const { navbar, footer } = pageContent.fields;
  const { title, content } = blogPostContent.fields;

  return (
    <>
      <Meta title={title} />
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
  const entries = (await client.getEntries({
    content_type: 'blogPosts',
  })) as EntryCollection<IBlogPostsFields>;

  const paths = locales
    .map((locale) => {
      return entries.items.map((item) => {
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
    fallback: false,
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

  return {
    props: {
      pageContent: pageContent.items[0],
      blogPostContent: blogPostContent.items[0],
    },
  };
}

export { getStaticPaths, getStaticProps };
export default BlogPostPage;
