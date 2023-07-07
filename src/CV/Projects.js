import React from 'react';
import { Container, Row, Col, Image, Tab, Tabs } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cv.css';
import mekanbulImage from './images/mekanbul-image.jpg';
import carprojectImage from './images/carproject-image.jpg';
import graduationImage from './images/graduation-image.jpg';
import parlakgelecekImage from './images/parlakgelecek-image.jpg';
import azureprojectImage from './images/azureproject-image.jpg';

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <Row>
        <Col>
          <div className="section">
            <h2>Projeler</h2>
            <Tabs defaultActiveKey="mekanbul" id="projects-tabs">
              <Tab eventKey="mekanbul" title="MekanBul">
                <div className="project-details">
                  <Slider {...settings}>
                    <div>
                      <Image src={mekanbulImage} alt="MekanBul" className="project-image" />
                      <p>Using React (MERN), I created a site for finding a place.</p>
                    </div>
                    <div>
                      <Image src={mekanbulImage} alt="MekanBul" className="project-image" />
                      <p>Using React (MERN), I created a site for finding a place.</p>
                    </div>
                    <div>
                      <Image src={mekanbulImage} alt="MekanBul" className="project-image" />
                      <p>Using React (MERN), I created a site for finding a place.</p>
                    </div>
                    {/* Diğer resimleri buraya ekleyin */}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="carproject" title="CarProject">
                <div className="project-details">
                  <Slider {...settings}>
                    <div>
                      <Image src={carprojectImage} alt="CarProject" className="project-image" />
                      <p>I made CarProject website using .Net.</p>
                    </div>
                    {/* Diğer resimleri buraya ekleyin */}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="graduation" title="Project for Graduation">
                <div className="project-details">
                  <Slider {...settings}>
                    <div>
                      <Image src={graduationImage} alt="Project for Graduation" className="project-image" />
                      <p>Using React-Native, I'm creating a mobile application.</p>
                    </div>
                    {/* Diğer resimleri buraya ekleyin */}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="parlakgelecek" title="ParlakGelecek">
                <div className="project-details">
                  <Slider {...settings}>
                    <div>
                      <Image src={parlakgelecekImage} alt="ParlakGelecek" className="project-image" />
                      <p>I made a Job site using HTML-CSS-Javascript.</p>
                    </div>
                    {/* Diğer resimleri buraya ekleyin */}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="azureproject" title="AzureProject">
                <div className="project-details">
                  <Slider {...settings}>
                    <div>
                      <Image src={azureprojectImage} alt="AzureProject" className="project-image" />
                      <p>My project to improve myself in Azure.</p>
                    </div>
                    <div>
                      <Image src={azureprojectImage} alt="AzureProject" className="project-image" />
                      <p>Diğer resimlerin açıklamalarını buraya ekleyin.</p>
                    </div>
                    <div>
                      <Image src={azureprojectImage} alt="AzureProject" className="project-image" />
                      <p>Diğer resimlerin açıklamalarını buraya ekleyin.</p>
                    </div>
                    {/* Diğer resimleri buraya ekleyin */}
                  </Slider>
                </div>
              </Tab>
            </Tabs>
          </div>

          <div className="section">
            <h2>Skills</h2>
            <div className="skills-frame">
              <ul className="skills-list">
                <li>
                  <strong>Web Frontend Development:</strong> I have good experience in HTML/CSS/Bootstrap technologies.
                </li>
                <li>
                  <strong>Web Backend Development:</strong> I have worked with .Net and Node.js for backend development.
                </li>
                <li>
                  <strong>Database Management:</strong> I have experience with SQL and MongoDB.
                </li>
                <li>
                  <strong>Mobile Development:</strong> I have worked with React Native for mobile application development.
                </li>
                <li>
                  <strong>Cloud Technologies:</strong> I have knowledge of Microsoft Azure services.
                </li>
                <li>
                  <strong>Version Control:</strong> I am familiar with Git and GitHub.
                </li>
                <li>
                  <strong>Problem Solving:</strong> I have strong analytical and problem-solving skills.
                </li>
                <li>
                  <strong>Languages:</strong> Turkish (Native), English (Intermediate)
                </li>
              </ul>
            </div>
          </div>

        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
