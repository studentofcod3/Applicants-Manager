import React from "react";
import styled from "styled-components";

import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  const Div = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem;

    .contact-form {
    }

    .contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  `;

  return (
    <Div>
      <div className='contact-form'>
        <ContactForm />
      </div>
      <div className='contacts'>
        <ContactFilter />
        <Contacts />
      </div>
    </Div>
  );
};

export default Home;
