import React from 'react';
import Image from 'next/image';
import Cta from '../Cta';

type AboutProps = {
  image: {
    src: string;
    width: number;
    height: number;
  };
};

function About({ image }: AboutProps) {
  return (
    <div
      className="
      grid h-full max-h-[50.625rem] max-w-full place-items-center text-center
      lg:grid-cols-2 lg:gap-8 lg:text-start"
    >
      <article
        className="
        order-2 grid gap-4 font-inter
        md:gap-6
        lg:gap-8 lg:bg-transparent lg:p-0"
      >
        <h2
          className="
          text-2xl font-extrabold
          md:text-5xl
          lg:text-7xl"
        >
          <span className="text-white">About me</span>
        </h2>
        <p
          className="
          grid max-w-[50ch] gap-4 text-sm leading-relaxed text-gray-300 
          md:text-lg"
        >
          <span>
            I&apos;m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript.
          </span>
          <span>
            When writing JavaScript code I mostly use React, TypeScript and
            Tailwind CSS, but I can adapt to whatever tools are required.
          </span>
          <span>
            I&apos;m based in Częstochowa, Poland, but I&apos;m happy working
            remotly too. When I&apos;m not coding you&apos;ll find me outdoors.
            I love being out in nature whether that&apos;s going for a walk,
            biking, reading books or just hanging out with my friends.
          </span>
        </p>
        <Cta
          className="
          mx-auto w-fit
          lg:mx-0"
          text="More about me here"
          destination="/about"
        />
      </article>
      <div
        className="
        max-w-xs self-end
        md:max-w-md 
        lg:max-w-none lg:self-center"
      >
        <Image src={image} alt="" />
      </div>
    </div>
  );
}

export default About;
