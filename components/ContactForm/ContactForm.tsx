import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { IContact } from '../../types/generated/contentful';

import Submit from './Submit';
import TextArea from './TextArea';
import Label from './Label';
import ErrorLabel from './ErrorLabel';
import Input from './Input';

type ContactFormProps = {
  content: IContact;
};

function ContactForm({ content }: ContactFormProps) {
  const {
    name,
    namePlaceholder,
    email,
    emailPlaceholder,
    message,
    messagePlaceholder,
    submit,
    onEmptyField,
    onInvalidEmail,
    thankYouUrl,
  } = content.fields;

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: yup.object({
      fullName: yup.string().trim().required(onEmptyField),
      email: yup.string().trim().required(onEmptyField).email(onInvalidEmail),
      message: yup.string().trim().required(onEmptyField),
    }),
    onSubmit: () => {},
  });

  return (
    <form
      className="
      space-y-8
      sm:w-96"
      action="https://formsubmit.co/56ba29188e35a9bc8dd475cf7a096839"
      method="POST"
      onSubmit={(event) => {
        if (
          !formik.isValid ||
          formik.values.name === '' ||
          formik.values.email === '' ||
          formik.values.message === ''
        ) {
          event.preventDefault();
        }
      }}
    >
      <div className="relative">
        <Label htmlFor="name">{name}</Label>
        <Input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder={namePlaceholder}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name! && !!formik.errors.name}
        />
        <ErrorLabel>{formik.touched.name && formik.errors.name}</ErrorLabel>
      </div>
      <div className="relative">
        <Label htmlFor="email">{email}</Label>
        <Input
          type="email"
          id="email"
          name="email"
          autoComplete="name"
          placeholder={emailPlaceholder}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email! && !!formik.errors.email}
        />
        <ErrorLabel>{formik.touched.email && formik.errors.email}</ErrorLabel>
      </div>
      <div className="relative">
        <Label htmlFor="message">{message}</Label>
        <TextArea
          id="message"
          name="message"
          placeholder={messagePlaceholder}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message! && !!formik.errors.message}
        />
        <ErrorLabel>{formik.touched.message && formik.errors.message}</ErrorLabel>
      </div>
      <div className="hidden">
        <input type="hidden" name="_subject" value="Personal Website: New submission!" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={thankYouUrl} />
      </div>
      <div className="mt-4">
        <Submit>{submit}</Submit>
      </div>
    </form>
  );
}

export default ContactForm;
