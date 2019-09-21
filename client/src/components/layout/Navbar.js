import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

import styled from "styled-components";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      <li className='name'>
        Hello <span>{user && user.name}</span>
      </li>
      <li>
        <a onClick={onLogout} href='#!'>
          <span>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    background: #cf9c9b;
    padding: 0 2rem;
    opacity: 0.9;
    border: solid 1px #fff;

    h1 {
      font-family: "Big Shoulders Display", cursive;
    }

    ul {
      display: flex;
      align-items: center;
      li {
        list-style: none;
        a {
          margin-left: 1rem;
          text-decoration: none;
          color: #000;
          border-bottom: solid 1px black;
          font-weight: bold;
        }
      }

      .name {
        padding: 0 2rem;
        span {
          display: block;
          font-weight: bold;
        }
      }
    }

    @media (max-width: 350px) {
      padding: 0 0.7rem;

      ul {
        .name {
          padding: 0;
        }
      }
    }
  `;
  return (
    <Nav>
      <h1>Contact Manager</h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </Nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "Applicant Manager"
};

export default Navbar;
