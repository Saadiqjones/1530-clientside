import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.div`
  width: 100%;
  height: 721px;
  border-style: solid;
  border-width: 5px;
  border-color: darkgreen;
  background: green;
`;

const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;

  display: grid;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 250px;
`;

const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 100px;
  
`;

const NavLink = styled(Link)`
  color: lightgreen;
  padding: 0 100px;
  font-size: 16px;

  font-weight: 700;
  text-decoration: underline;
  width: 160px;
`;
const horizontalgap = styled.div`
  float: left;
  overflow: hidden;
  height: 1px;
  width: 100px;
`;
const NavContent = styled.div`
background-color: white;
color: black;
border: 2px solid green;
padding: 130px 190px;
text-align: center;
text-decoration: none;
display: inline-block;
padding-left: 30px;
margin: 15px;
  `;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        
        <Nav>
          <NavLink to='/'>Profile Settings</NavLink>
          <NavLink to='/'>Saved Campaigns</NavLink>
          <NavLink to='/'>Created Campaigns</NavLink>
        </Nav>
        <Nav>
          <NavContent>Settings Page</NavContent>        
          <NavContent>Campaign 1</NavContent>
         <NavContent>Campaign 2</NavContent>
        </Nav> 
        <Nav>
          <NavLink to='/'>Payment Portfolio</NavLink>
          <NavLink to='/'>Chats</NavLink>
        </Nav>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
