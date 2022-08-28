import React from 'react';
import ContactForm from '../ContactForm';

import type { ContactFields } from '../../types/content/Contact';

type ContactProps = {
  id: string;
  content: ContactFields;
};

function Contact({ id, content }: ContactProps) {
  return (
    <div
      className="
      flex h-full max-w-padding-container flex-col items-center gap-16 px-8 text-center"
      id={id}
    >
      <h2
        className="
        text-2xl font-extrabold
        md:text-5xl"
      >
        <span className="text-white">{content.title}</span>
      </h2>
      <ContactForm content={content} />
    </div>
  );
}

export default Contact;
