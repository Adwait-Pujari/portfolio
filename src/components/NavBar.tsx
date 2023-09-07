import React, { useEffect } from 'react';
import { useState } from 'react' 
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
  
    // Correct the event name here (change "scrool" to "scroll")
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  //Need to set the type of Value later.
  const onUpdateActiveLink = (value: React.SetStateAction<string> | any ) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""} >
      <Container>

        <Navbar.Brand href="#home">
            <img src={''} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>projects</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>

          
          <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Adwait-Pujari"> <img src={navicon1} alt="" /> </a>
                <a href="https://www.linkedin.com/in/adwait-pujari"> <img src={navicon2} alt="" /> </a>
                {/* <a href="#"> <img src={''} alt="" /> </a> */}
              </div>
              <button className='xyz' onClick={() => console.log('connect')}> 
                <span> Connect Me </span> 
              </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;