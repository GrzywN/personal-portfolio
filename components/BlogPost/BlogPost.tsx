import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';
import {
  documentToReactComponents,
  CommonNode,
} from '@contentful/rich-text-react-renderer';
import Image from 'next/image';

import { IBlogPosts } from '../../types/generated/contentful';

const renderOption = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: ({ data }: CommonNode) => {
      return (
        <Image
          src={`https:${data.target.fields.file.url}`}
          height={data.target.fields.file.details.image.height}
          width={data.target.fields.file.details.image.width}
        />
      );
    },
  },
};

type BlogPostProps = {
  blogPostContent: IBlogPosts;
};

function BlogPost({ blogPostContent }: BlogPostProps) {
  const { title, content } = blogPostContent.fields;

  return (
    <article
      className="
      prose-sm prose prose-invert
        prose-headings:text-center prose-p:w-full prose-a:text-sky-blue prose-a:transition-colors hover:prose-a:text-white prose-img:rounded-md 
      md:prose-base 
      lg:prose-lg"
    >
      <h1>{title}</h1>
      {documentToReactComponents(content, renderOption)}
    </article>
  );
}

export default BlogPost;
