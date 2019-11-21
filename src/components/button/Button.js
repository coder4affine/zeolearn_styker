/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  button: {
    margin: theme.spacing(1),
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const Btn = ({ title, isSubmitting, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonSuccess}
        disabled={isSubmitting}
        {...props}
      >
        {title}
      </Button>
      {isSubmitting && <CircularProgress size={24} className={classes.buttonProgress} />}
    </div>
  );
};

Btn.propTypes = {};

export default Btn;
