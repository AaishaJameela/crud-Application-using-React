import React from "react";
import { Nav, NavBtn, NavBtnLink } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBtn>
          <NavBtnLink to="/">HOME</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/form">FORM</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/table">TABLE</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;
