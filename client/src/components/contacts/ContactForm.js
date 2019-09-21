import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }

  input {
    width: 100%;
    height: 1.4rem;
    margin-bottom: 0.5rem;
    padding: 0.2rem 0.4rem;
  }

  h5 {
  }

  .type-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 1rem;
    width: 100%;

    .type-mini-container {
      input {
        margin: 0;
      }

      span {
      }
    }
  }

  .btn-container {
    width: 100%;
    .btn {
      padding: 1rem 0;
      line-height: 0;

      :hover {
        cursor: pointer;
      }
    }

    .submit-btn {
      padding: 1rem 0;
      background: #b76a69;
      color: #fff;
      font-size: 1.15rem;
      font-family: "Big Shoulders Display", cursive;

      :hover {
        cursor: pointer;
      }
    }

    .clear-btn {
      width: 100%;

      :hover {
        background: red;
      }
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
    }
    input {
      width: 100%;
      height: 1.4rem;
      margin-bottom: 0.5rem;
      border-radius: 4px;
    }

    h5 {
    }

    .type-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      margin-bottom: 1rem;
      width: 100%;

      .type-mini-container {
        input {
          margin: 0;
        }

        span {
        }
      }
    }

    .btn-container {
      .btn {
      }

      .submit-btn {
      }

      .clear-btn {
      }
    }
  }
`;

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const { addContact, clearCurrent, updateContact, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const onChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2>{current ? "Edit Contact" : "Add Contact"}</h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <div className='type-container'>
        <div className='type-mini-container'>
          <input
            type='radio'
            name='type'
            value='personal'
            checked={type === "personal"}
            onChange={onChange}
          />
          <span>Personal</span>
        </div>
        <div className='type-mini-container'>
          <input
            type='radio'
            name='type'
            value='professional'
            checked={type === "professional"}
            onChange={onChange}
          />
          <span>Professional</span>
        </div>
      </div>
      <div className='btn-container'>
        <input
          type='submit'
          value={current ? "Update Contact" : "Add Contact"}
          className='btn submit-btn'
          onChange={onChange}
        />
      </div>
      {current && (
        <div className='btn-container'>
          <button className='btn clear-btn' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </Form>
  );
};

export default ContactForm;
