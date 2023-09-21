import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import Profile_pic from '../images/Profile_pic.jpeg';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <section className='banner' id="home">
      <Container>
        <Row className="banner-container">
          <Col xs={12} md={6}>
            <div className="left-content">
              <span className='tagline'>
                <h1><b>Hello All </b> </h1> 
                <h2><b>My name is Adwait Pujari</b></h2>
              </span>
              
              <section>
                <h3><b>About Me</b></h3>
                <ul>
                    <li>
                    Dedicated Computer Science Co-op Honors student at the University of Manitoba, currently in my third year with a minor in mathematics.
                    </li>
                    <li>
                    Passionate about innovation and eager to learn. Experienced in coding algorithms and collaborating effectively in team projects.
                    </li>
                    <li>
                    Known for strong work ethics, professionalism, and unwavering commitment to excellence.
                    </li>
                    <li>
                    Enthusiastic about networking with fellow tech enthusiasts and actively seeking opportunities for personal and professional growth.
                    </li>
                </ul>
                <p>
                    If you're seeking a tech enthusiast who blends technical expertise with a drive for growth and excellence, let's connect. I'm excited about what the tech world has in store, and I'm eager to contribute and learn.
                </p>
            </section>
            <button onClick={() => window.location.href = '#contacts'}>
                Let's Connect <ArrowRightCircle size={20} />
              </button>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="right-content">
              <img src={Profile_pic} alt="Profile Pic" className='Profile_picture' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
