import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import profileImage from './images/profile-image.jpg';
import profileImage2 from './images/profile-image2.jpeg';
import companyLogo from './images/company-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


const employees = [
  {
    name: 'Cumali Oğuz',
    image: profileImage,
    github: 'https://github.com/cumalioguz',
    email: 'cumalioguz1@gmail.com',
  },
  {
    name: 'Berat Sevim',
    image: profileImage2,
    github: 'https://github.com/beratsevim',
    email: 'berat.svm@hotmail.com',
  },
];

function Blog() {
  return (
    <Container>
      <Row>
        <Col>
          <div className="section">
          <h2>About Us</h2>
<p>Hello! We are a professional web and mobile app development team here to help you stand out in the digital world and captivate users. Our team consists of passionate and experienced individuals. We specialize in both web and mobile app development, working together to achieve the best results for each project.</p>

<p>In web development, we use fundamental languages such as HTML, CSS, and JavaScript, as well as popular frameworks and libraries like React and Angular. This equips us with the skills and knowledge to create modern, user-friendly, and responsive websites.</p>

<p>We are also strong in mobile app development, specializing in iOS and Android platforms. We develop mobile apps using React Native, which allows us to build apps with a single codebase that works on both iOS and Android platforms. This provides faster development cycles, cost efficiency, and maximizes the performance and usability of the apps. For Android app development, we work with Kotlin and Java, staying up to date with the latest technologies and best practices to ensure a seamless experience for users on mobile devices.</p>

<p>Our team also excels in database management, API integration, security measures, and performance optimization. We actively manage projects at every stage and provide tailored solutions based on your needs.</p>

<p>Our collaboration philosophy is to establish close relationships with our clients and maintain constant communication throughout the project process. We strive to deliver projects on time and within budget, prioritizing customer satisfaction.</p>

<p>By working with us, you can grow your business, strengthen your digital presence, and make an impact on your target audience. Join us to take your business to the next level and discover how we can assist you.</p>



          </div>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <div className="company-info" id="companyInfo">
            <Image
              src={companyLogo}
              alt="Company Logo"
              className="company-logo"
              style={{
                width: '200px',
                height: '200px',
                objectFit: 'cover',
                marginBottom: '20px',
                marginTop: '80px',
              }}
            />
            <h1 className="text-center" style={{ marginBottom: '20px' }}>Digi Illusionists</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="employee-section" id="employees" style={{ marginTop: '30px' }}>
            <div className="d-flex justify-content-center">
              {employees.map((employee, index) => (
                <Card className="mb-4 employee-card" key={index} style={{ width: '18rem', marginRight: '15px' }}>
                  <Card.Body>
                    <Row>
                      <Col md={12} className="text-center">
                        <div className="employee">
                          <Image
                            src={employee.image}
                            alt="Employee"
                            className="employee-image rounded-circle"
                            style={{
                              width: '200px',
                              height: '200px',
                              objectFit: 'cover'
                            }}
                          />
                          <h5 className="employee-name" style={{ fontSize: '1.4rem', marginTop: '15px' }}>{employee.name}</h5>
                          <p className="employee-icons" style={{ marginTop: '15px' }}>
                            <a href={employee.github} target="_blank" rel="noopener noreferrer">
                              <FontAwesomeIcon icon={faGithub} size="2x" style={{ marginRight: '10px', color: 'purple' }} />
                            </a>
                            <a href={`mailto:${employee.email}`}>
                              <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" style={{ marginLeft: '10px', color: 'purple' }} />
                            </a>
                          </p>

                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </Col>
      </Row>


    </Container>
  );
}

export default Blog;