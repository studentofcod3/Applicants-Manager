import React, { useContext, useEffect } from "react";

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

  return (
    <div id='Home'>
      <div className='contact-form'>
        <ContactForm />
      </div>
      <div className='contacts-area'>
        <ContactFilter />
        <div className='contacts'>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Home;
