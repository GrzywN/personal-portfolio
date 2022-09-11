import React from 'react';
import Image from 'next/image';
import {
  documentToReactComponents,
  CommonNode,
} from '@contentful/rich-text-react-renderer';
import { BLOCKS, Document } from '@contentful/rich-text-types';

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

type ArticleProps = {
  title: string;
  content: Document;
};

function Article({ title, content }: ArticleProps) {
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

export default Article;
