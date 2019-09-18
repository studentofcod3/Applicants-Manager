import React, { useState } from "react";
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

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log("Login Submit");
  };
  return (
    <Div>
      <h1>Account Login</h1>
      <form onSubmit={onSubmit}>
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
          />
        </div>
        <input className='submit-btn' type='submit' value='Login' />
      </form>
    </Div>
  );
};

export default Login;
