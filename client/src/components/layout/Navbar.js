import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

import styled from "styled-components";

const Navbar = ({ title }) => {
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
      <li>Hello</li>
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
    background: #202020;
    padding: 0 2rem;
    h1 {
    }

    ul {
      display: flex;
      align-items: center;
      li {
        list-style: none;
        margin-left: 1rem;
        a {
          text-decoration: none;
          color: #ddd;
        }
      }
    }
  `;
  return (
    <Nav>
      <h1>{title}</h1>
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
