import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import styled from "styled-components";

const Form = styled.form`
  h2 {
  }
  input {
    width: 100%;
    height: 1.2rem;
    margin-bottom: 0.5rem;
    border-radius: 4px;
  }

  h5 {
  }

  .container {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;

    .type-container {
      input {
        margin: 0;
      }

      span {
      }
    }
  }

  .btn-container {
    .btn {
      padding: 1rem 0;
      line-height: 0;

      :hover {
        cursor: pointer;
        background: yellow;
      }
    }

    .submit-btn {
    }

    .clear-btn {
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
      <div className='container'>
        <div className='type-container'>
          <input
            type='radio'
            name='type'
            value='personal'
            checked={type === "personal"}
            onChange={onChange}
          />
          <span>Personal</span>
        </div>
        <div className='type-container'>
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
