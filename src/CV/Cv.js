import React, { useState } from 'react';
import { Container, Navbar, Nav, Tab, Tabs } from 'react-bootstrap';
import './Cv.css';
import Blog from './Blog';
import Projects from './Projects';
import companyLogo from './images/company-logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
function Cv() {
  const [activeTab, setActiveTab] = useState('blog');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const scrollToSections = () => {
    window.scrollTo({ top: 1000, behavior: 'smooth' });
    window.scrollTo({ top: document.querySelector('#companyInfo').offsetTop, behavior: 'smooth' });
    window.scrollTo({ top: document.querySelector('#employees').offsetTop, behavior: 'smooth' });
  }

  return (
    <Container fluid>
      <Navbar bg="white" variant="light" expand="lg">
        <Navbar.Brand onClick={scrollToSections}>
          <img
            src={companyLogo}
            alt="Company Logo"
            className="company-logo"
            style={{
              height: '50px',
              marginRight: '10px',
            }}
          />
          Digi Illusionists
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link
              className={`nav-link ${activeTab === 'blog' ? 'active' : ''}`}
              onClick={() => handleTabChange('blog')}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => handleTabChange('projects')}
            >
              Projeler
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="ml-auto">
          <a href={`mailto:digiillusionists@gmail.com`}>
            <FontAwesomeIcon icon={faEnvelopeSquare} size="2x" style={{color: 'purple',marginRight: '20px', }} />
          </a>
        </Nav>
      </Navbar>

      <Tabs activeKey={activeTab}>
        <Tab eventKey="blog">
          <Blog />
        </Tab>
        <Tab eventKey="projects" >
          <Projects />
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Cv;
