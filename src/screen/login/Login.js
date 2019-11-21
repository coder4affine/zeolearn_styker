/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import TextInput from '../../components/textInput/TextInput';
import MyForm from '../../components/myForm/MyForm';
import { CHECK_AUTH, REQUEST } from '../../constants/actionTypes';

const fields = [
  {
    name: 'username',
    label: 'Username',
    component: TextInput,
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Required';
      }
      return error;
    },
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    component: TextInput,
    validate: value => {
      let error = '';
      if (!value) {
        error = 'Required';
      }
      return error;
    },
  },
];

const Login = ({ onLogin }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <MyForm
        fields={fields}
        onSubmit={onLogin}
        initialValues={{
          username: '',
          password: '',
        }}
      />
    </div>
  );
};

Login.propTypes = {};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    loading: !!state.loading[CHECK_AUTH],
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (values, actions) =>
      dispatch({ type: `${CHECK_AUTH}_${REQUEST}`, payload: values, meta: actions }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
