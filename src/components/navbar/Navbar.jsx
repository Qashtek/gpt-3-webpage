import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';


// Menu variable
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
);



function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
        <div className='gpt3__navbar-sign'>
          <p>Sign In</p>
          <button type='button'>Sign Up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          {/* if toggleMenu var is true, display close btn and vice versa */}
          { toggleMenu ? 
            <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} />  :
            <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}  />
          }

          {/* if toggle menu var is true, display this elements and vice versa */}
          {
            toggleMenu && 
            (<div className='gpt3__navbar-menu_container scale-up-center'>
              <div className='gpt3__navbar-menu_container-links'>
                <Menu />
                <div className='gpt3__navbar-menu_container-links-sign'>
                  <p>Sign In</p>
                  <button type='button'>Sign Up</button>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar;