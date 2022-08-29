import React from 'react';
import ContactForm from '../ContactForm';

import type { ContactFields } from '../../types/content/models';

type ContactProps = {
  id: string;
  content: ContactFields;
};

function Contact({ id, content }: ContactProps) {
  return (
    <div
      className="
      flex h-full max-w-padding-container flex-col items-center gap-8 px-8 text-center md:gap-16"
      id={id}
    >
      <h2
        className="
        text-2xl font-extrabold
        md:text-5xl"
      >
        <span className="text-white">{content.title}</span>
      </h2>
      <div className="md:rounded-blob-contact md:bg-light-grey md:p-24">
        <ContactForm content={content} />
      </div>
    </div>
  );
}

export default Contact;
