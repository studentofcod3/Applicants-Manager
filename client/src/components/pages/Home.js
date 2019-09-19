import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";

import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
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
