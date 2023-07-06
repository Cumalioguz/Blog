import React, { useState } from 'react';
import { Container, Navbar, Nav, Tab, Tabs } from 'react-bootstrap';
import './Cv.css';
import Blog from './Blog';
import Projects from './Projects';

function Cv() {
  const [activeTab, setActiveTab] = useState('blog');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container fluid>
      <Navbar bg="white" variant="light" expand="lg">
        <Navbar.Brand href="/">Uygulamanın Adı</Navbar.Brand>
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
