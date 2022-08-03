import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import pizzeria from '/public/projects/pizzeria.png';

function Card() {
  return (
    <figure className="max-w-xs rounded-lg bg-light-grey shadow-md">
      <Image className="rounded-t-lg" src={pizzeria} alt="" />
      <figcaption className="px-5 pt-5">
        <Link href="/">
          <h3 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Pizzeria u Karola
          </h3>
        </Link>
        <p className="mb-3 font-normal text-gray-300">
          A simple pizzeria website made with HTML, CSS and JavaScript. It uses
          libraries like Leaflet.js and Splide.js to create a responsive slider.
        </p>
      </figcaption>
      <div className="flex justify-center gap-4 px-5 pb-5">
        <a
          href="/link"
          className="inline-flex items-center gap-4 rounded-lg bg-white py-2 px-3 text-center text-sm font-medium text-light-grey"
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path
              fill="#27272a"
              d="M24 8.2c0-.318-.126-.623-.351-.849-.226-.225-.531-.351-.849-.351h-6.6c-.318 0-.623.126-.849.351-.225.226-.351.531-.351.849v13.6c0 .318.126.623.351.849.226.225.531.351.849.351h6.6c.318 0 .623-.126.849-.351.225-.226.351-.531.351-.849v-13.6zm-11 14.8h-8l2.599-3h5.401v3zm6.5-1c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm3.5-3v-9.024h-7v9.024h7zm-2-14h-2v-2h-17v13h11v2h-13v-17h21v4zm-.5 4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5h-2c-.276 0-.5.224-.5.5s.224.5.5.5h2z"
            />
          </svg>
          Live demo
        </a>
        <a
          href="/link"
          className="inline-flex items-center gap-4 rounded-lg bg-dark-grey py-2 px-3 text-center text-sm font-medium text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fff"
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          Source
        </a>
      </div>
    </figure>
  );
}

export default Card;
