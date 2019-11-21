/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const TextInput = ({ field, form: { touched, errors }, ...props }) => {
  const classes = useStyles();
  return (
    <TextField
      error={!!touched[field.name] && !!errors[field.name]}
      helperText={errors[field.name]}
      className={classes.textField}
      margin="normal"
      {...field}
      {...props}
    />
  );
};

TextInput.propTypes = {};

export default TextInput;
