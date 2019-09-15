import React from "react";
import Contacts from "../contacts/Contacts";
import styled from "styled-components";

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
      <div className='contact-form'> Contact Form will be here</div>
      <div className='contacts'>
        <Contacts />
      </div>
    </Div>
  );
};

export default Home;
