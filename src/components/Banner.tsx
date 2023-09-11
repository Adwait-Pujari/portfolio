
// import { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import Profile_pic from '../images/Profile_pic.jpeg';
import '../styles/Banner.css';

const Banner = () => {


    // useEffect(() => {
    //     let ticker = setInterval(() => {

    //     }, )
    // })

  return (
    <section className='banner' id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className='tagline'> Hello All </span>
                    <h1> 
                        {'My name is Adwait Pujari'} 
                    </h1>
                    <p>
                        MY INFO
                    </p>
                    <button onClick={() => console.log('Connect')}> Let's Connect <ArrowRightCircle size={20}> </ArrowRightCircle></button>
                </Col>

                <Col>
                    {/* This will be my profile pic */}
                    <img src={Profile_pic} alt="Profile Pic" className='Profile_picture' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner