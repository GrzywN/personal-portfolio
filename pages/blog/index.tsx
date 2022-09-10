import React from 'react';
import { createClient } from 'contentful';

import Meta from '../../components/Meta';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import Section from '../../components/Section';
import Blog from '../../components/Blog';
import Footer from '../../components/Footer';

import { IPageBlog } from '../../types/generated/contentful';

type BlogPageProps = {
  content: IPageBlog;
};

function BlogPage({ content }: BlogPageProps) {
  const { navbar, sectionBlog, footer, blogPosts } = content.fields;

  return (
    <>
      <Meta title={`Karol Binkowski - ${sectionBlog.fields.title}`} />
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
    },
    revalidate: 30,
  };
}

export { getStaticProps };
export default BlogPage;
