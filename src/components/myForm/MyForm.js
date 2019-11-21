/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '../button/Button';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
}));

const MyForm = ({ fields, ...props }) => {
  const classes = useStyles();
  return (
    <Formik {...props}>
      {({ isSubmitting, status }) => {
        console.log(status);
        return (
          <Form className={classes.container}>
            {status && !!status.serverError && <p>{status.serverError}</p>}
            {fields.map(x => (
              <Field key={x.name} {...x} />
            ))}
            <Button type="submit" isSubmitting={isSubmitting} title="Login" />
          </Form>
        );
      }}
    </Formik>
  );
};

MyForm.propTypes = {
  fields: PropTypes.array.isRequired,
};

export default MyForm;
