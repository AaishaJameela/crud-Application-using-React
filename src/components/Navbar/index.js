import React from "react";
import { Nav, NavBtn, NavBtnLink } from "./NavbarElements";
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavBtn>
          <NavBtnLink to="/" activeStyle>
            HOME
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/form" activeStyle>
            FORM
          </NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to="/table" activeStyle>
            TABLE
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
export default Navbar;
