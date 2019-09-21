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
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 2rem;
    margin: auto 0;

    .contact-form {
      margin: 0 0 2rem 0;
      width: 90%;
      opacity: 0.9;
      background: #fff;
      border-radius: 7px;
    }

    .contacts-area {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: none;

      .contacts {
        display: flex;
        flex-direction: row;
      }
    }

    .contacts-area,
    .contact-form {
      padding: 1rem;
      border-radius: 7px;
    }

    @media (max-width: 768px) {
      align-items: space-around;
      padding: 1rem;
      margin: 0;

      .contact-form {
      }

      .contacts-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        background: none;
      }

      .contacts-area,
      .contact-form {
        padding: 1rem;
      }
    }
  `;

  return (
    <Div>
      <div className='contact-form'>
        <ContactForm />
      </div>
      <div className='contacts-area'>
        <ContactFilter />
        <div className='contacts'>
          <Contacts />
        </div>
      </div>
    </Div>
  );
};

export default Home;
