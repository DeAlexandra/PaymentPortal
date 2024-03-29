import React from 'react';
import { Formik } from 'formik';

function DrawerForm({ children, initialValues, validationSchema, updateEntry }) {
  return (
    <Formik
      enableReinitialize={ true }
      initialValues={ initialValues }
      validationSchema={ validationSchema }
      onSubmit={ (data, { setSubmitting }) => {
        setSubmitting(true);
        updateEntry(data);
        setSubmitting(false);
      } }>
      { children }
    </Formik>
  );
}
export { DrawerForm };