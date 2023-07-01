import React from 'react';
import styled from 'styled-components';
import Burger from '../Burger/Burger';

const Nav = styled.nav`
  width: 100%;
  max-width: 600px;
  height: 55px;
  border-bottom: 2px solid #f2f2f2;
  padding: 0px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;


  .logo {
    padding: 15px 0;
    margin: 0px 10px;
    color: #f1356d;
    font-weight: bold;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        To Do App
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar

