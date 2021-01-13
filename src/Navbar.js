import React, { useState } from 'react';

import {
  CDBBtn,
  CDBNavbar,
  CDBNavBrand,
  CDBNavbarNav,
  CDBNavToggle,
  CDBNavItem,
  CDBNavLink,
  CDBCollapse,
} from 'cdbreact';

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <header
      className="page-header"
      style={{ width: '60%', margin: '0 auto', 'max-width': '1320px' }}
    >
      <CDBNavbar
        className="navigation bg-transparent p-0"
        expand="md"
        dark
        scrolling
      >
        <CDBNavBrand href="/">
          <img alt="logo" src="/logo192.png" width="25px" />
        </CDBNavBrand>
        <CDBNavToggle
          onClick={() => {
            setCollapse(!collapse);
          }}
        />
        <CDBCollapse id="navbarCollapse1" delay="0" isOpen={collapse} navbar>
          <CDBNavbarNav>
            <CDBNavItem active>
              <CDBBtn flat className="p-2 border-0 bg-transparent">
                <CDBNavLink to="#">Home</CDBNavLink>
              </CDBBtn>
            </CDBNavItem>
            <CDBNavItem>
              <CDBBtn flat className="p-2 border-0 bg-transparent">
                <CDBNavLink to="#">Resources</CDBNavLink>
              </CDBBtn>
            </CDBNavItem>
            <CDBNavItem>
              <CDBBtn flat className="p-2 border-0 bg-transparent">
                <CDBNavLink to="#">Blog</CDBNavLink>
              </CDBBtn>
            </CDBNavItem>
            <CDBNavItem>
              <CDBBtn flat className="p-2 border-0 bg-transparent">
                <CDBNavLink to="#">Contact</CDBNavLink>
              </CDBBtn>
            </CDBNavItem>
            <CDBNavItem>
              <CDBBtn flat className="p-2 border-0 bg-transparent">
                <CDBNavLink to="#">Support</CDBNavLink>
              </CDBBtn>
            </CDBNavItem>
          </CDBNavbarNav>
        </CDBCollapse>
      </CDBNavbar>
    </header>
  );
};

export default Navbar;
