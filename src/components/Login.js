import React from 'react';
import propTypes from 'prop-types';

const Login = ({ token }) => {
  return (
    <>
      <h1>You logged in successfully</h1>
      <h2>Your token is: {token}</h2>
    </>
  );
};

Login.propTypes = {
  token: propTypes.string,
};

export default Login;
