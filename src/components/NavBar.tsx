import React from 'react';
import { useState, useEffect } from 'react' 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navicon1 from '../images/github_logo.png';
import navicon2 from '../images/linkedIn_logo.png';
import '../styles/NavBar.css';

function NavBar() {
  
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  //Function that changes the active link when clicked on
  const onUpdateActiveLink = (value: React.SetStateAction<string> ) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""} >
      <Container>
        <Navbar.Brand href="#home">
          <span className='navbar-logo'> 
            <b><p> Infinitix </p></b> 
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Adwait-Pujari"> 
                  <img src={navicon1} alt="GitHub Logo" /> 
                </a>
                <a href="https://www.linkedin.com/in/adwait-pujari">
                  <img src={navicon2} alt="LinkedIn Logo" /> 
                </a>
              </div>
              <div>
                <button className='xyz' onClick={() => console.log('connect')}> 
                  <span> Connect Me </span> 
                </button>
              </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;