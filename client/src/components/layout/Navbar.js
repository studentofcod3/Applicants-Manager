import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ title }) => {
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
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
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
