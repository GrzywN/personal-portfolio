import React from 'react';
import ContactForm from '../ContactForm';

import type { ContactFields } from '../../types/content/models';

type ContactProps = {
  content: ContactFields;
};

function Contact({ content }: ContactProps) {
  const { title } = content;

  return (
    <div
      className="
      flex flex-col items-center gap-8 px-8 pt-24 text-center
      md:gap-16"
    >
      <h2
        className="
        text-3xl font-extrabold text-white
        sm:text-4xl
        md:text-5xl"
      >
        {title}
      </h2>
      <div
        className="
        md:rounded-blob-contact md:bg-light-grey md:p-24"
      >
        <ContactForm content={content} />
      </div>
    </div>
  );
}

export default Contact;
