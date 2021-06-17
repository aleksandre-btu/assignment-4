import React, { useState, useContext } from 'react';
import { LoginContext } from '../context/loginContext';
import { connect } from 'react-redux';
import * as actions from '../store/actions';
import propTypes from 'prop-types';
import Login from './Login';
import Register from './Register';
import { Link } from 'react-router-dom';
import classes from '../css/home.module.css';

const Home = props => {
  const [method, setMethod] = useState('');
  const [email] = useState('');
  const [password] = useState('');
  const loginData = useContext(LoginContext);

  const onSubmitHandler = e => {
    e.preventDefault();
    loginData.email = email;
    loginData.password = password;
    if (method === 'login') {
      props.onLogin(e.target[0].value, e.target[1].value);
    }
    if (method === 'register') {
      props.onRegister(e.target[0].value, e.target[1].value);
    }
  };

  let message;
  if (method === 'login') {
    message = <Login token={props.token} />;
  }
  if (method === 'register') {
    message = <Register token={props.token} id={props.id} />;
  }
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/users">Users</Link>
      <Link to="/resources">Resources</Link>
      <form className={classes.Form} onSubmit={e => onSubmitHandler(e)}>
        <input className={classes.Email} type="text" name="email" id="email" />
        <input
          className={classes.Psw}
          type="text"
          name="password"
          id="password"
        />
        <button type="submit" onClick={() => setMethod('login')}>
          Login
        </button>
        <button type="submit" onClick={() => setMethod('register')}>
          Register
        </button>
      </form>
      {message}
    </>
  );
};

const mapStateToProps = state => {
  return {
    token: state.token,
    id: state.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (email, password) => dispatch(actions.login(email, password)),
    onRegister: (email, password) =>
      dispatch(actions.register(email, password)),
  };
};

Home.propTypes = {
  onLogin: propTypes.func,
  onRegister: propTypes.func,
  token: propTypes.string,
  id: propTypes.number,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
