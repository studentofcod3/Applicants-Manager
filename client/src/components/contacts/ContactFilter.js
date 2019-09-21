import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  background: #eee;
  border-radius: 8px;

  .input {
    border-radius: 8px;
    color: #000;
    font-size: 1.15rem;
    display: block;
    padding: 0.5rem 1rem;
  }
`;

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Form>
      <input
        ref={text}
        type='text'
        placeholder='Search Contacts...'
        onChange={onChange}
        className='input'
      />
    </Form>
  );
};

export default ContactFilter;
