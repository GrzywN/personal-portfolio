import React from 'react';

type SectionProps = {
  className?: string;
  children: React.ReactNode;
  skew?: boolean;
  skewedBgClassName?: string;
  id?: string;
};

function Section({ className, children, skew, skewedBgClassName, id }: SectionProps) {
  const skewClasses = skew ? `-skew-y-6 ${skewedBgClassName}` : '';

  return (
    <section className={`${className} relative w-full bg-no-repeat`} id={id}>
      <div className={`${skewClasses} absolute inset-0`} />
      <div
        className="
        relative mx-auto grid min-h-screen max-w-padding-container place-items-center
        lg:min-h-padding-container"
      >
        {children}
      </div>
    </section>
  );
}

Section.defaultProps = {
  className: '',
  skew: false,
  skewedBgClassName: '',
  id: '',
};

export default Section;
