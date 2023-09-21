import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ContactMe  from '../images/contactMe_img.png';
import  '../styles/Contact.css';

const Contact = () => {

  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }  

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({success: false, message: '' });


  const onFormUpdate = (category: any, value: any) => {
    setFormDetails({
        ...formDetails,
        [category]: value
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setButtonText('Please Wait a min');
  
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
  
      if (response.ok) {
        // Request was successful
        let result = await response.json();
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Message Sent successfully' });
      } else {
        // Request failed (e.g., server error or network issue)
        setStatus({ success: false, message: 'Something went wrong, please try again' });
      }
    } catch (error) {
      // Handle network errors or unexpected exceptions
      console.error(error);
      setStatus({ success: false, message: 'Server is inactive. Please try again later.' });
    }
  
    setButtonText('Send');
  }

  return (
    <div className='contact contactSection' id='contacts'>
        <Container className='contactContainer'>
            <h2><b> Contact Me </b></h2>
            <Row className='align-items-center'>
                <Col md={6}>
                    <img src ={ContactMe} alt="Contact Us" className='ContactMe' />

                </Col>
                <Col md={6}>
                    <h2> Feel free to leave a message.</h2>
                    <form onSubmit={handleSubmit}>
                        <Row className='formEntries'>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName',e.target.value)} />
                            </Col>

                            <Col sm={6} className='px-1'>
                                <input type="email" value={formDetails.email} placeholder="example123@gmail.com" onChange={(e) => onFormUpdate('email',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone',e.target.value)} />
                            </Col>

                            <Col sm={6} className='px-1'>
                                <textarea  rows={6} value={formDetails.message} placeholder='Enter your message' onChange={(e) => onFormUpdate('message',e.target.value)} />
                            </Col>
                            <Col sm={6} className='px-1'>
                                <button type="submit" className='submitButton'> <span>{buttonText}</span></button>
                            </Col>
                            <Col>
                                {status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}> {status.message} </p>
                                </Col> }
                            </Col>
                        </Row>
                    </form>
                </Col>

            </Row>
        </Container>
    </div>
  )
}

export default Contact