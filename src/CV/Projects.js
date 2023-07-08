import React from 'react';
import { Container, Row, Col, Image, Tab, Tabs, Accordion } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cv.css';
import mekanbulImage from './images/mekanbul-image.jpg';
import carprojectImage from './images/carproject-image.jpg';
import graduationImage from './images/graduation-image.jpg';
import parlakgelecekImage from './images/parlakgelecek-image.jpg';
import azureprojectImage from './images/azureproject-image.jpg';

const Projects = () => {
  const sliderSettings = {
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
            <Tabs defaultActiveKey="mekanbul" id="projects-tabs" className="custom-tabs">
              <Tab eventKey="mekanbul" title="MekanBul">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={mekanbulImage} alt="MekanBul" className="project-image" />
                      <p>React (MERN) kullanarak yer bulma sitesi oluşturdum.</p>
                    </div>
                    <div>
                      <Image src={mekanbulImage} alt="MekanBul" className="project-image" />
                      <p>React (MERN) kullanarak yer bulma sitesi oluşturdum.</p>
                    </div>
                    <div>
                      <Image src={mekanbulImage} alt="MekanBul" className="project-image" />
                      <p>React (MERN) kullanarak yer bulma sitesi oluşturdum.</p>
                    </div>
                    {/* Diğer resimleri buraya ekleyin */}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="carproject" title="CarProject">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={carprojectImage} alt="CarProject" className="project-image" />
                      <p>.Net kullanarak CarProject web sitesi oluşturdum.</p>
                    </div>
                    {/* Diğer resimleri buraya ekleyin */}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="graduation" title="Mezuniyet Projesi">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={graduationImage} alt="Mezuniyet Projesi" className="project-image" />
                      <p>React-Native kullanarak mobil uygulama geliştiriyorum.</p>
                    </div>
                    {/* Diğer resimleri buraya ekleyin */}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="parlakgelecek" title="ParlakGelecek">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={parlakgelecekImage} alt="ParlakGelecek" className="project-image" />
                      <p>HTML-CSS-Javascript kullanarak bir iş sitesi oluşturdum.</p>
                    </div>
                    {/* Diğer resimleri buraya ekleyin */}
                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="azureproject" title="AzureProject">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={azureprojectImage} alt="AzureProject" className="project-image" />
                      <p>Azure'da kendimi geliştirmek için bir proje yaptım.</p>
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
       
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
