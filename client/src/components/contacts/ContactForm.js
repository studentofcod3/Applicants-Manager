import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

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
    <form id='contactForm' onSubmit={onSubmit}>
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
    </form>
  );
};

export default ContactForm;
