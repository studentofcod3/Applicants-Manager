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

const Register = () => {
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
    console.log("Register Submit");
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
          />
        </div>
        <div>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            type='password'
            name='password2'
            value={password2}
            onChange={onChange}
          />
        </div>
        <input className='submit-btn' type='submit' value='Register' />
      </form>
    </Div>
  );
};

export default Register;
