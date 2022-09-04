import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Submit from './Submit';
import TextArea from './TextArea';
import Label from './Label';
import ErrorLabel from './ErrorLabel';
import Input from './Input';

import type { ContactFields } from '../../types/content/models';

type ContactFormProps = {
  content: ContactFields;
};

function ContactForm({ content }: ContactFormProps) {
  const {
    fullName,
    fullNamePlaceholder,
    email,
    emailPlaceholder,
    message,
    messagePlaceholder,
    submit,
    onEmptyField,
    onInvalidEmail,
    thankYouUrl,
  } = content;

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      message: '',
    },
    validationSchema: yup.object({
      fullName: yup.string().required(onEmptyField),
      email: yup.string().required(onEmptyField).email(onInvalidEmail),
      message: yup.string().required(onEmptyField),
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
    >
      <div className="relative">
        <Label htmlFor="fullName">{fullName}</Label>
        <Input
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="fullName"
          name="fullName"
          placeholder={fullNamePlaceholder}
          error={formik.touched.fullName! && !!formik.errors.fullName}
        />
        <ErrorLabel>
          {formik.touched.fullName && formik.errors.fullName}
        </ErrorLabel>
      </div>
      <div className="relative">
        <Label htmlFor="email">{email}</Label>
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          name="email"
          type="email"
          placeholder={emailPlaceholder}
          error={formik.touched.email! && !!formik.errors.email}
        />
        <ErrorLabel>{formik.touched.email && formik.errors.email}</ErrorLabel>
      </div>
      <div className="relative">
        <Label htmlFor="message">{message}</Label>
        <TextArea
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="message"
          name="message"
          placeholder={messagePlaceholder}
          error={formik.touched.message! && !!formik.errors.message}
        />
        <ErrorLabel>
          {formik.touched.message && formik.errors.message}
        </ErrorLabel>
      </div>
      <div className="hidden">
        <input
          type="hidden"
          name="_subject"
          value="Personal Website: New submission!"
        />
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
