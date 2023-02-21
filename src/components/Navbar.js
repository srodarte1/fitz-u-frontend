import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { Stack } from '@mui/material';
import { useState, useContext } from 'react'
import {Context} from '../Context'

// import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  const {user, handleLogout} = useContext(Context)

  return (
  <Stack direction="" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <CustomLink to="/">
      <img src="https://iili.io/HEpdD4p.png" alt="logo" style={{ width: '250px', height: '250px', margin: '0px 10px' }} />
    </CustomLink>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
     {!user ? (
      <>
       <CustomLink to="/signup" style={{ textDecoration: 'none', color: 'black', borderBottom: '3px solid #FF10F0' }}>Signup</CustomLink>
      <CustomLink to="/login" style={{ textDecoration: 'none', color: 'black', borderBottom: '3px solid #FF10F0' }}>Login</CustomLink> 
      </>) : (
        <CustomLink onClick={handleLogout} style={{ textDecoration: 'none', color: 'black', borderBottom: '3px solid #FF10F0' }}>Logout</CustomLink>
      )}
      <CustomLink to="/about" style={{ textDecoration: 'none', color: 'black', borderBottom: '3px solid #FF10F0' }}>About</CustomLink>
      <CustomLink to="/support" style={{ textDecoration: 'none', color: 'black', borderBottom: '3px solid #FF10F0' }}>Support</CustomLink>

    </Stack>
  </Stack>
)};

export default Navbar;
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  return (
    <div className={isActive ? "active" : ""}>
    <Link to={to} {...props}>
      {children}
      </Link>
    </div>
  )
}