import React, { useContext } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div id='contactItem'>
      <h3>
        <span className='name'>{name}</span>
        <span
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-normal")
          }
        >
          {type}
        </span>
      </h3>
      <ul className='list'>
        {email ? (
          <li>
            <i className='fas fa-envelope-open'></i> <span>{email}</span>
          </li>
        ) : (
          <li>
            <i className='fas fa-envelope-open' />
            <a href='#' onClick={() => setCurrent(contact)}>
              {" "}
              Click to add email{" "}
            </a>
          </li>
        )}
        {phone ? (
          <li>
            <i className='fas fa-phone' />
            <span>{phone}</span>
          </li>
        ) : (
          <li>
            <i className='fas fa-phone' />
            <a href='#' onClick={() => setCurrent(contact)}>
              {" "}
              Click to add number{" "}
            </a>
          </li>
        )}
      </ul>
      <p>
        <button className='edit-btn' onClick={() => setCurrent(contact)}>
          <i className='far fa-edit'></i>
        </button>
        <button className='delete-btn' onClick={onDelete}>
          <i className='far fa-trash-alt'></i>
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
