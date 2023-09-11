import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Projects.css';

type Project = {
    title: string;
    description: string;
};

const Projects = () => {
    
    const ListOfProjects: Project[] = [
        {
          title: "Project 1",
          description: "Description of Project 1",
        },
        {
          title: "Project 2",
          description: "Description of Project 2",
        },
        {
            title: "Project 3",
            description: "Description of Project 3",
        },
        {
            title: "Project 4",
            description: "Description of Project 4",
        },
        {
            title: "Project 5",
            description: "Description of Project 5",
        },
        {
            title: "Project 6",
            description: "Description of Project 6",
        },
        {
            title: "Project 7",
            description: "Description of Project 7",
        },
    ];

  return (
    <section className='project'>
        <Container>
            <Row>
                <Col>
                    <h2><b> Projects </b></h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis error mollitia aut, odit corrupti porro voluptatum ratione beatae culpa dignissimos optio amet commodi aspernatur, a praesentium voluptatem quam eum voluptate.</p>

                    <Row>
                        {ListOfProjects.map((project, index) => (
                            <Col key={index} md={4}>
                                <Card>
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