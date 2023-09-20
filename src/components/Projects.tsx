import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Projects.css';

type Project = {
    title: string;
    description: string;
    link: string;
};

const ListOfProjects: Project[] = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      link: "https://github.com/Adwait-Pujari",
    },
    {
      title: "Project 2",
      description: "Description of Project 2",
      link: "https://github.com/Adwait-Pujari",
    },
    {
        title: "Project 3",
        description: "Description of Project 3",
        link: "https://github.com/Adwait-Pujari",
    },
    {
        title: "Project 4",
        description: "Description of Project 4",
        link: "https://github.com/Adwait-Pujari",
    },
    {
        title: "Project 5",
        description: "Description of Project 5",
        link: "https://github.com/Adwait-Pujari",
    },
    {
        title: "Project 6",
        description: "Description of Project 6",
        link: "https://github.com/Adwait-Pujari",
    },
    {
        title: "Project 7",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ex tenetur, maxime aliquid iusto exercitationem expedita reiciendis harum aperiam voluptates est consequatur, rem, obcaecati molestias impedit minima soluta. Quibusdam, minima.",
        link: "https://github.com/Adwait-Pujari",
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
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error mollitia aut, odit corrupti porro voluptatum ratione beatae culpa dignissimos optio amet commodi aspernatur, a praesentium voluptatem quam eum voluptate.</p>

                    <Row>
                        {ListOfProjects.map((project, index) => (
                            <Col key={index} md={4}>
                                <Card onClick={() => handleclick(project)}>
                                    <Card.Img variant="top" alt={project.title} />
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