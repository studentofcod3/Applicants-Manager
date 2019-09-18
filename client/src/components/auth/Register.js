import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
  }

  form {
    div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
      label {
      }

      input {
      }
    }

    .submit-btn {
      width: 100%;
      display: block;
    }
  }
`;

const Register = () => {
  const alertContext = useContext(AlertContext);

  const { setAlert } = alertContext;

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
      console.log("Register Submit");
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
