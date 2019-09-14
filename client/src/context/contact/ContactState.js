import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Ayyoub Maknassa",
        email: "ayyoub@gmail.com",
        phone: "0754545454",
        type: "personal"
      },
      {
        id: 2,
        name: "Ja Hallo",
        email: "hallo@gmail.com",
        phone: "+33754545454",
        type: "professional"
      },
      {
        id: 3,
        name: "Wagwan G",
        email: "wag@gwan.com",
        phone: "+44333333333",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Set Current Contact
  // Clear Current Contact

  // Update Contact
  // Delete Contact

  // Filter Contacts
  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
