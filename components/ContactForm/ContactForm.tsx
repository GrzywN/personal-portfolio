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
    firstName,
    firstNamePlaceholder,
    lastName,
    lastNamePlaceholder,
    email,
    emailPlaceholder,
    message,
    messagePlaceholder,
    submit,
    onEmptyField,
    onInvalidEmail,
  } = content;

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    validationSchema: yup.object({
      firstName: yup.string().required(onEmptyField),
      lastName: yup.string().required(onEmptyField),
      email: yup.string().required(onEmptyField).email(onInvalidEmail),
      message: yup.string().required(onEmptyField),
    }),
    onSubmit: () => {},
  });

  return (
    <form
      className="grid w-full max-w-lg gap-1 md:gap-6"
      action="https://formsubmit.co/56ba29188e35a9bc8dd475cf7a096839"
      method="POST"
    >
      <div className="grid gap-1 md:grid-cols-2 md:gap-6">
        <div>
          <Label htmlFor="firstName">{firstName}</Label>
          <Input
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="firstName"
            name="firstName"
            placeholder={firstNamePlaceholder}
            error={!!formik.errors.firstName}
          />
          <ErrorLabel>
            {formik.touched.firstName && formik.errors.firstName}
          </ErrorLabel>
        </div>
        <div>
          <Label htmlFor="lastName">{lastName}</Label>
          <Input
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="lastName"
            name="lastName"
            placeholder={lastNamePlaceholder}
            error={!!formik.errors.lastName}
          />
          <ErrorLabel>
            {formik.touched.lastName && formik.errors.lastName}
          </ErrorLabel>
        </div>
      </div>
      <div>
        <Label htmlFor="email">{email}</Label>
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          name="email"
          type="email"
          placeholder={emailPlaceholder}
          error={!!formik.errors.email}
        />
        <ErrorLabel>{formik.touched.email && formik.errors.email}</ErrorLabel>
      </div>
      <div>
        <Label htmlFor="message">{message}</Label>
        <TextArea
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="message"
          name="message"
          placeholder={messagePlaceholder}
          error={!!formik.errors.message}
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
      </div>
      <Submit>{submit}</Submit>
    </form>
  );
}

export default ContactForm;
