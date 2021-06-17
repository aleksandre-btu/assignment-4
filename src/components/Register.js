import React from 'react';
import propTypes from 'prop-types';

const Register = ({ token, id }) => {
  return (
    <>
      <h1>You registered successfully</h1>
      <h2>Your token is: {token}</h2>
      <h2>Your id is: {id}</h2>
    </>
  );
};

Register.propTypes = {
  token: propTypes.string,
  id: propTypes.number,
};

export default Register;
