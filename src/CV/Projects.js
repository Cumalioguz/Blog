import React from 'react';
import { Container, Row, Col, Image, Tab, Tabs, Accordion } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Cv.css';
import union1 from './images/1.jpg';
import union2 from './images/2.jpg';
import ebus from './images/3.jpg';
import social from './images/4.jpg';
import resturant1 from './images/5.jpg';
import resturant2 from './images/6.jpg';
import mekanbul from './images/7.jpg';

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
            <h2>Projects</h2>
            <Tabs defaultActiveKey="mekanbul" id="projects-tabs" className="custom-tabs">
              <Tab eventKey="mekanbul" title="uni-ON">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={union1} alt="MekanBul" className="project-image" />

                    </div>
                    <div>
                      <Image src={union2} alt="MekanBul" className="project-image" />

                    </div>


                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="carproject" title="E-Bus">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={ebus} alt="CarProject" className="project-image" />

                    </div>

                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="graduation" title="Social App">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={social} alt="Mezuniyet Projesi" className="project-image" />

                    </div>

                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="parlakgelecek" title="Restaurant App">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={resturant1} alt="ParlakGelecek" className="project-image" />

                    </div>
                    <div>
                      <Image src={resturant2} alt="ParlakGelecek" className="project-image" />

                    </div>

                  </Slider>
                </div>
              </Tab>
              <Tab eventKey="azureproject" title="Mekan Bul">
                <div className="project-details">
                  <Slider {...sliderSettings}>
                    <div>
                      <Image src={mekanbul} alt="AzureProject" className="project-image" />

                    </div>

                  </Slider>
                </div>
              </Tab>
            </Tabs>
          </div>

          <div className="section">
            <h2>Project Descriptions</h2>

            <Accordion defaultActiveKey="0" style={{ marginBottom: '20px' }}>
  <Accordion.Item eventKey="0" style={{ marginBottom: '10px', border: 'none' }}>
    <Accordion.Header style={{ background: 'none', padding: '0', borderBottom: '1px solid #ddd', color: 'black' }}>
      Union
    </Accordion.Header>
    <Accordion.Body style={{ marginBottom: '10px' }}>
      Union is a mobile application developed using React Native. React Native offers the advantage of compatibility with both iOS and Android platforms. The project utilizes Firebase for data storage. It leverages Firebase's Firestore real-time database and features like Cloud Functions, providing real-time updates and additional functionalities.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" style={{ marginBottom: '10px', border: 'none' }}>
    <Accordion.Header style={{ background: 'none', padding: '0', borderBottom: '1px solid #ddd', color: 'black' }}>
      E-bus
    </Accordion.Header>
    <Accordion.Body style={{ marginBottom: '10px' }}>
      E-bus is a mobile application developed using React Native. It is an Expo project, which offers advantages such as a fast development process and the ability to run on multiple platforms with a single codebase. The app allows users to select and reserve bus tickets based on seat availability.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2" style={{ marginBottom: '10px', border: 'none' }}>
    <Accordion.Header style={{ background: 'none', padding: '0', borderBottom: '1px solid #ddd', color: 'black' }}>
      Social App
    </Accordion.Header>
    <Accordion.Body style={{ marginBottom: '10px' }}>
      Social App is a mobile application developed using React Native. The project utilizes Firebase for user authentication and data storage. React Native offers advantages such as rapid prototyping, user-friendly interface design, and high performance.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3" style={{ marginBottom: '10px', border: 'none' }}>
    <Accordion.Header style={{ background: 'none', padding: '0', borderBottom: '1px solid #ddd', color: 'black' }}>
      Restaurant App
    </Accordion.Header>
    <Accordion.Body style={{ marginBottom: '10px' }}>
      Restaurant App is a web project developed using JavaScript, HTML, CSS, and Bootstrap. These languages and frameworks offer advantages such as user-friendly interface design and fast development processes. JavaScript is a popular language supported by web browsers and has a large community. Bootstrap provides ready-to-use components and responsive design features, enabling the creation of professional-looking websites quickly and easily.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4" style={{ marginBottom: '10px', border: 'none' }}>
    <Accordion.Header style={{ background: 'none', padding: '0', borderBottom: '1px solid #ddd', color: 'black' }}>
      Mekan Bul
    </Accordion.Header>
    <Accordion.Body style={{ marginBottom: '10px' }}>
      Mekan Bul is a web project developed using React.js and the MERN stack (MongoDB, Express.js, React.js, Node.js). React.js enables the creation of user-friendly interfaces and the development of reusable components through its component-based architecture. The MERN stack utilizes MongoDB and Node.js for data storage and processing capabilities, while React.js is used to build the web application's interface. This allows the app to offer functionalities such as finding nearby places based on location.
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
