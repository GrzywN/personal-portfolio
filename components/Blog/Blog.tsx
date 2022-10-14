import React from 'react';
import { ISectionBlog, IBlogPosts } from '../../types/generated/contentful';

import Cta from '../Cta';

type BlogProps = {
  generalContent: ISectionBlog;
  blogPostContent: IBlogPosts[];
};

function Blog({ generalContent, blogPostContent }: BlogProps) {
  if (!generalContent || !blogPostContent) {
    return <div className="">Loading...</div>;
  }

  const { title, paragraph, cta } = generalContent.fields;

  return (
    <section className="grid w-full place-items-center gap-16 px-8" title={title}>
      <header className="text-center">
        <h1
          className="
          text-3xl font-extrabold tracking-tight text-white
          sm:text-4xl"
        >
          {title}
        </h1>
        <p
          className="
          mx-auto mt-3 max-w-2xl text-sm text-gray-400
          sm:mt-4 sm:text-base
          md:text-lg
          lg:text-xl"
        >
          {paragraph}
        </p>
      </header>
      <div className="w-full">
        <ul className="grid gap-4">
          {blogPostContent.map(
            (item) =>
              item.fields && (
                <li
                  className="flex h-24 w-full items-center justify-between gap-4 rounded-md bg-light-grey py-4 px-6"
                  key={item.fields.slug}
                >
                  <span
                    className="
                    text-sm text-white
                    sm:text-base
                    md:text-lg
                    lg:text-xl"
                  >
                    {item.fields.title}
                  </span>
                  <Cta destination={`/blog/${item.fields.slug}`} text={cta} />
                </li>
              )
          )}
        </ul>
      </div>
    </section>
  );
}

export default Blog;
