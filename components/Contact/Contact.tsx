import React from 'react';
import ContactForm from '../ContactForm';

import type { ContactFields } from '../../types/content/models';

type ContactProps = {
  id: string;
  content: ContactFields;
};

function Contact({ id, content }: ContactProps) {
  const { title } = content;

  return (
    <div
      className="
      flex flex-col items-center gap-8 px-8 text-center
      md:gap-16"
      id={id}
    >
      <h2
        className="
        text-4xl font-extrabold text-white
        sm:text-5xl
        md:text-6xl"
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
