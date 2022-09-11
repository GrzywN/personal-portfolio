import React from 'react';
import { createClient } from 'contentful';
import { IPageBlog, LOCALE_CODE } from '../../types/generated/contentful';

import Meta from '../../components/Meta';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Blog from '../../components/Blog';
import Footer from '../../components/Footer';

type BlogPageProps = {
  content: IPageBlog;
  locale: LOCALE_CODE;
};

function BlogPage({ content, locale }: BlogPageProps) {
  const { navbar, sectionBlog, footer, blogPosts } = content.fields;
  const { title } = sectionBlog.fields;

  return (
    <>
      <Meta title={`Karol Binkowski - ${title}`} locale={locale} />
      <Navbar content={navbar} />
      <Container>
        <Section id="blog">
          <Blog generalContent={sectionBlog} blogPostContent={blogPosts} />
        </Section>
      </Container>
      <Footer content={footer} />
    </>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({ content_type: 'pageBlog', locale });
  const content = entries.items[0] as IPageBlog;

  return {
    props: {
      content,
      locale,
    },
    revalidate: 30,
  };
}

export { getStaticProps };
export default BlogPage;
