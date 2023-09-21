import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Projects.css';
import pizza_img from '../images/pizza_img.jpg';
import auction_img from '../images/auction_img.png';
import audiogram_img from '../images/Audiogram_icon.jpg';
import chess_img from '../images/chess_img.jpg';
import databaseAnalysis_img from '../images/databaseAnalysis_img.jpg';
import inba_img from '../images/INBA_img.png';
import loginModule_img from '../images/LoginModule_img.avif';


type Project = {
    title: string;
    description: string;
    link: string;
    image: string;
};

const ListOfProjects: Project[] = [
    {
      title: "Pizza Sales Website",
      description: "Created a fully functional pizza ordering website leveraging C# and Entity Framework within the MVC architecture. This dynamic platform features an intuitive point-of-sale system, ensuring seamless order processing. For efficient data management, I implemented a simulated database and meticulously integrated essential libraries and connections",
      link: "https://github.com/Adwait-Pujari/RazorPizzaWebsite",
      image: pizza_img,
    },
    {
      title: "Project Audiogram",
      description: "Created an Audiogram application using Angular, with a user-friendly interface built on Angular Material. Leveraged Angular Component Lifecycle and Directives to capture user inputs and efficiently parse them into JSON format for streamlined data management.",
      link: "https://github.com/Adwait-Pujari/Audiogram",
      image: audiogram_img,
    },
    {
        title: "INBA - Financing Application via Android Studio",
        description: "Developed INBA, an Android application using Android Studio. Designed to empower users to attain financial wellness by analyzing spending patterns and offering personalized recommendations for optimizing saving and spending ratios.",
        link: "https://github.com/Adwait-Pujari/INBA",
        image: inba_img,
    },
    {
        title: "Registration Module using C# and Entity Framework",
        description: "Designed a secure login module using C#, MVC design pattern, and Entity Framework for an Event Management System. Utilized Microsoft SQL Server for efficient database management, contributing to a streamlined event management application.",
        link: "https://github.com/Adwait-Pujari/SimpleRegistration",
        image: loginModule_img,
    },
    {
        title: "Auction Website",
        description: "Developed this user-friendly prototype aimed to enhance user interaction and appeal. Leveraging HTML, CSS, JavaScript, and Bootstrap libraries, to optimize user experience and streamline online auctions.",
        link: "https://github.com/bochacho/HCI",
        image: auction_img,
    },
    {
        title: "Analysis of Movies and Tv Shows",
        description: "Populated open source dataset using MySQL and Excel tools (XLOOKUP). Normalized the data and constructed multiple queries with the help of Java and SQL.",
        link: "https://github.com/Om-Sevak/Group-Project-3380",
        image: databaseAnalysis_img,
    },
    {
        title: "Chess Game",
        description: "A working chess game made using java and java swing library. Implemented basic chess rules excluding tournament ruels.",
        link: "https://github.com/Adwait-Pujari/Chess-Game",
        image: chess_img,
    },
];

const Projects = () => {
    
  const handleclick = (project: Project) => {
    window.open(project.link, '_blank');
  }  

  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                    <h2><b> Projects </b></h2>
                    <p> Browse through my portfolio of diverse projects, each a testament to my passion for problem-solving and innovation in the world of technology </p>

                    <Row>
                        {ListOfProjects.map((project, index) => (
                            <Col key={index} md={4}>
                                <Card onClick={() => handleclick(project)}>
                                    <Card.Img variant="top" src={project.image} alt={project.title} />
                                    <Card.Body>
                                        <Card.Title> {project.title} </Card.Title>
                                        <Card.Text> {project.description} </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Projects