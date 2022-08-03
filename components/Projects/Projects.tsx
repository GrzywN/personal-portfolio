import React from 'react';
import Card from './Card';

function Projects() {
  return (
    <div
      className="
      grid h-full max-w-padding-container place-items-center gap-16 px-8 text-center"
    >
      <article
        className="
        grid gap-2 font-inter
        md:gap-4
        lg:gap-6"
      >
        <h2
          className="
          text-2xl font-extrabold
          md:text-5xl
          lg:text-7xl"
        >
          <span className="text-white">Check out my projects</span>
        </h2>
        <p
          className="
          text-sm leading-relaxed text-gray-300 
          md:text-lg"
        >
          You can see my other, but smaller projects on my GitHub account
        </p>
      </article>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Card />
      </div>
    </div>
  );
}

export default Projects;
