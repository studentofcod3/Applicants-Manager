import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
  }

  form {
    width: 50%;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 2rem;

      label {
        color: white;
        margin-bottom: 0.5rem;
      }

      input {
        padding: 0.3rem;
        border-radius: 7px;
        opacity: 0.9;
      }
    }

    .submit-btn {
      width: 100%;
      background: #fff;
      border-radius: 5px;
      padding: 0.3rem 0.2rem;
      font-weight: 300;
      font-size: 1.15rem;
      opacity: 0.85;
    }
  }

  @media (max-width: 768px) {
    form {
      width: 80%;

      div {
        input {
          padding: 0.5rem 0.3rem;
        }
      }
    }
  }
`;

const Register = props => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    // Redirect if user isAuthenticated
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "This email is already registered") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords must match", "danger");
    } else {
      register({
        name,
        email,
        password
      });
    }
  };
  return (
    <Div>
      <h1>Account Register</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' value={name} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='email'>Email Address</label>
          <input type='email' name='email' value={email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <div>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
            minLength='6'
          />
        </div>
        <input className='submit-btn' type='submit' value='Register' />
      </form>
    </Div>
  );
};

export default Register;
