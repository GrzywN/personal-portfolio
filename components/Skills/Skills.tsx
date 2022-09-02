import React from 'react';
import GridItem from './GridItem';

import iconHtml from '../../public/icons/skills/html5.svg';
import iconCss from '../../public/icons/skills/css3.svg';
import iconSass from '../../public/icons/skills/sass.svg';
import iconBootstrap from '../../public/icons/skills/bootstrap.svg';
import iconBulma from '../../public/icons/skills/bulma.svg';
import iconTailwind from '../../public/icons/skills/tailwindcss.svg';
import iconJavaScript from '../../public/icons/skills/javascript.svg';
import iconTypeScript from '../../public/icons/skills/typescript.svg';
import iconReact from '../../public/icons/skills/react.svg';
import iconRedux from '../../public/icons/skills/redux.svg';
import iconNext from '../../public/icons/skills/next.svg';
import iconElectron from '../../public/icons/skills/electron.svg';
import iconBabel from '../../public/icons/skills/babeljs.svg';
import iconFigma from '../../public/icons/skills/figma.svg';
import iconGit from '../../public/icons/skills/git.svg';
import iconLinux from '../../public/icons/skills/linux.svg';

import type { SkillsFields } from '../../types/content/models';

type SkillsProps = {
  content: SkillsFields;
};

function Skills({ content }: SkillsProps) {
  const { title, paragraph } = content;

  return (
    <div className="grid gap-24">
      <header className="text-center">
        <h2
          className="
          text-3xl font-extrabold tracking-tight text-white 
          sm:text-4xl"
        >
          {title}
        </h2>
        <p
          className="
          mx-auto mt-3 max-w-2xl text-xl text-gray-400 
          sm:mt-4"
        >
          {paragraph}
        </p>
      </header>
      <div
        className="
        grid grid-cols-2 gap-y-8
        md:grid-cols-3 md:gap-x-24
        lg:grid-cols-4"
      >
        <GridItem src={iconHtml} name="HTML5" />
        <GridItem src={iconCss} name="CSS3" />
        <GridItem src={iconSass} name="Sass" />
        <GridItem src={iconBootstrap} name="Bootstrap" />
        <GridItem src={iconBulma} name="Bulma" />
        <GridItem src={iconTailwind} name="Tailwind CSS" />
        <GridItem src={iconJavaScript} name="JavaScript" />
        <GridItem src={iconTypeScript} name="TypeScript" />
        <GridItem src={iconReact} name="React" />
        <GridItem src={iconRedux} name="Redux" />
        <GridItem src={iconNext} name="Next.js" />
        <GridItem src={iconElectron} name="Electron" />
        <GridItem src={iconBabel} name="Babel" />
        <GridItem src={iconFigma} name="Figma" />
        <GridItem src={iconGit} name="Git" />
        <GridItem src={iconLinux} name="Linux" />
      </div>
    </div>
  );
}

export default Skills;
