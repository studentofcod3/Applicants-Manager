import React from "react";
import styled from "styled-components";

import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  const Div = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem;

    .contact-form {
    }

    .contacts {
    }
  `;

  return (
    <Div>
      <div className='contact-form'>
        <ContactForm />
      </div>
      <div className='contacts'>
        <Contacts />
      </div>
    </Div>
  );
};

export default Home;
