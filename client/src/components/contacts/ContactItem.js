import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
  const Card = styled.div`
    margin: 1rem 2rem;
    border: #222 solid 1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
      margin: 0.2 0.5rem;
      .name {
        margin: 0 1rem;
      }

      .badge {
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        margin: 0 1rem;
        border-radius: 5px;
      }

      .badge-success {
        background: green;
      }

      .badge-normal {
        background: blue;
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
      button {
        width: 50%;
        border: none;
        padding: 0.8rem 0;
        opacity: 0.85;
        transition: opacity 0.2s ease-in-out;

        :hover {
          opacity: 1;
          cursor: pointer;
        }
      }
      .edit-btn {
        background: #222;
      }

      .delete-btn {
        background: red;
      }
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
        {email && (
          <li>
            <i className='fas fa-envelope-open'></i> <span>{email}</span>
          </li>
        )}
        {phone && (
          <li>
            <i className='fas fa-phone' />
            <span>{phone}</span>
          </li>
        )}
      </ul>
      <p>
        <button className='edit-btn'>Edit</button>
        <button className='delete-btn'>Delete</button>
      </p>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
