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

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    margin: 2rem;
    box-shadow: -2px 2px 2px 2px #0d0000;
    border-radius: 7px;
    background: #fff;
    box-sizing: border-box;
    width: 50%;

    h3 {
      box-sizing: border-box;
      margin: 0.2rem 1rem;
      padding: 1rem;
      display: flex;
      justify-content: space-around;
      width: 100%;

      .name {
        margin-right: auto;
      }

      .badge {
        font-size: 1rem;
        padding: 0.4rem 0.5rem;
        margin: 0 1rem;
        margin-right: 0;
        border-radius: 5px;
      }

      .badge-success {
        background: #068808;
      }

      .badge-normal {
        background: #080688;
        color: #fff;
      }
    }

    .list {
      width: 100%;
      li {
        width: 100%;
        list-style: none;
        margin: 0;
        margin-bottom: 0.5rem;
        padding: 0;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        i {
          margin-right: 1rem;
        }

        span {
        }
      }
    }

    p {
      width: 100%;
      margin-bottom: 0;
      border-top: solid 2px #440403;

      button {
        width: 50%;
        border: none;
        padding: 0.8rem 0;
        opacity: 0.85;
        transition: opacity 0.2s ease-in-out;
        color: #fff;
        font-family: "Big Shoulders Display", cursive;
        font-size: 1.3rem;
        letter-spacing: 0.2rem;

        :hover {
          opacity: 1;
          cursor: pointer;
        }
      }
      .edit-btn {
        background: #b76a69;
        border-right: solid 2px #000;
      }

      .delete-btn {
        background: #880806;
        border-left: solid 2px #000;
      }
    }

    @media (max-width: 768px) {
      width: 80%;
    }
  `;

  return (
    <Card>
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
          EDIT
        </button>
        <button className='delete-btn' onClick={onDelete}>
          DELETE
        </button>
      </p>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
