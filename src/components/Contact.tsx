import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ContactMe  from '../images/contactMe_img.png';
import  '../styles/Contact.css';
const nodemailer = require('nodemailer');

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
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
        user: "adwaitpujari08@gmail.com",
        pass: "boaz szwa asmf owon"
    },
    });
    transporter.verify((error: any) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Ready to Send");
        }
      });
    
    
    const sendEmail = ({firstName, lastName, email, phone, message}: {firstName: string, lastName: string, email: string, phone: string, message: string}) => {
        const name = firstName + " " + lastName;
        let retMsg;
        const mail = {
            from: name,
            to: "adwaitpujari08@gmail.com",
            subject: "Portfolio Contact Form",
            html: `<p> I am <b>${name}</b> and i want to connect you, 
            this is my email ${email} and my contact info ${phone}. </p>
            <p>Here is  my text message</p>
            <p> ${message} </p>`
        };
        retMsg = { message: 'Email sent successfully!' };
        transporter.sendMail(mail, (error: any) => {
            if (error) {
                retMsg = { code: 404, status: "Error sending email" };
            } else {
                retMsg = { code: 200, status: "Message Sent" };
            }
        });
        return retMsg;
    };

  const handleSubmit = async (e: any) =>{
    e.preventDefault();
    setButtonText('Please Wait a min');
    let response =  sendEmail(formDetails);
    setButtonText('Send');
    // convert response to json
    let result = JSON.parse(JSON.stringify(response));
    setFormDetails(formInitialDetails);
    if (result.error) {
        setStatus({ success: false, message: 'Something went wrong, please try again' });
    } else {
        setStatus({ success: true, message: 'Message Sent successfully' });
    }
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