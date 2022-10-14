import React from 'react';

function ArticleSkeleton() {
  return (
    <article
      className="
      prose-sm prose prose-invert 
      prose-headings:animate-pulse prose-headings:text-center
      prose-p:animate-pulse prose-p:rounded-full prose-p:bg-light-grey prose-p:text-transparent
      prose-ul:grid prose-ul:list-none
      prose-li:w-full
      md:prose-base
      lg:prose-lg"
    >
      <h1>Loading...</h1>
      <ul aria-hidden>
        <li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perferendis</p>
          <p>rem voluptatum voluptas aperiam repellendus, adipisci molestias quaerat</p>
          <p>qui repellat eaque fugiat eveniet? Nemo, at.</p>
        </li>
        <li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perferendis</p>
          <p>rem voluptatum voluptas aperiam repellendus, adipisci molestias quaerat</p>
        </li>
        <li>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo perferendis</p>
          <p>rem voluptatum voluptas aperiam repellendus, adipisci molestias quaerat</p>
          <p>qui repellat eaque fugiat eveniet? Nemo, at.</p>
        </li>
      </ul>
    </article>
  );
}

export default ArticleSkeleton;
