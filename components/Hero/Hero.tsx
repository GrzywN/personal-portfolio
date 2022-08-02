import React from 'react';
import Image from 'next/image';
import Cta from '../Cta';

type HeroProps = {
  image: {
    src: string;
    width: number;
    height: number;
  };
};

function Hero({ image }: HeroProps) {
  return (
    <div
      className="
      grid h-full max-w-padding-container place-items-center px-8 text-center
      md:gap-16
      lg:grid-cols-2 lg:gap-4 lg:text-start"
    >
      <article
        className="
        order-2 grid gap-4 font-inter
        md:gap-6
        lg:order-none lg:gap-8"
      >
        <h2
          className="
          text-2xl font-extrabold
          md:text-5xl"
        >
          <span className="text-white">Hi, I&apos;m Karol.</span>
          <br />
          <span className="text-sky-blue">I&apos;m a web developer.</span>
        </h2>
        <p
          className="
          max-w-[50ch] text-sm leading-relaxed text-gray-300 
          md:text-lg"
        >
          I&apos;m a software engineer with a passion for building beautiful,
          user-friendly applications. I&apos;m currently looking for some great
          people to work with and learn a lot from.
        </p>
        <Cta
          className="
          mx-auto w-max
          lg:mx-0"
          destination="#contact"
          text="Contact me"
        />
      </article>
      <div
        className="
        max-w-xs self-end 
        md:max-w-md 
        lg:max-w-none"
      >
        <Image src={image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
