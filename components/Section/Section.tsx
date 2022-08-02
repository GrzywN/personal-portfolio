import React from 'react';

type SectionProps = {
  className?: string;
  children: React.ReactNode;
};

function Section({ className, children }: SectionProps) {
  return (
    <section className={`${className} w-full bg-no-repeat`}>
      <div
        className="
        relative mx-auto grid min-h-screen max-w-padding-container place-items-center lg:min-h-padding-container"
      >
        {children}
      </div>
    </section>
  );
}

Section.defaultProps = {
  className: '',
};

export default Section;
