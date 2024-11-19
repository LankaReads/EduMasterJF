import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '@/components/navBar/Nav.css'; 
import logo1 from '../../img/logo1.png';

function NavBar() {
  const location = useLocation();

  // Helper function to add 'active' class based on current path
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <div className='container-fluid bg-white sticky-top'>
      <Navbar expand="md" className="py-3">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src={logo1}
              alt="Logo"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll style={{ maxHeight: '180px' }}>

              {/* Consistent Style for Nav Links */}
              <Nav.Link href="/" className={`nav-link-custom mx-1 ${isActive('/')}`}>
                <i className="bi bi-house-door me-2"></i> Home
              </Nav.Link>

              {/* Programs Multilevel Dropdown */}
              <NavDropdown
                title={<><i className="bi bi-journal-bookmark me-2"></i> Programmes</>}
                className="nav-link-custom"
                id="programsDropdown"
              >
                <NavDropdown.Item href="researchers" className="dropdown-item-custom">
                  Our Researchers
                </NavDropdown.Item>
                <NavDropdown.Item href="courses" className="dropdown-item-custom">
                  Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="projects" className="dropdown-item-custom">
                  Projects
                </NavDropdown.Item>

                {/* Submenu for More Courses */}
                <NavDropdown
                  title="Ongoing Projects"
                  drop="end"
                  className="submenu-dropdown"
                >
                  <NavDropdown.Item href="/courses/design" className="dropdown-item-custom">
                    Project 01
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/courses/marketing" className="dropdown-item-custom">
                    Project 02
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown>

              <Nav.Link href="/about" className={`nav-link-custom mx-1 ${isActive('/about')}`}>
                <i className="bi bi-info-circle me-2"></i> About
              </Nav.Link>

              <Nav.Link href="/blogs" className={`nav-link-custom mx-1 ${isActive('/blogs')}`}>
                <i className="bi bi-chat-square-text me-2"></i> Blogs
              </Nav.Link>

              <Nav.Link href="/contact" className={`nav-link-custom mx-1 ${isActive('/contact')}`}>
                <i className="bi bi-chat-square-text me-2"></i> Contact
              </Nav.Link>

              <Nav.Link href="/post" className={`nav-link-custom mx-1 ${isActive('/post')}`}>
                <i className="bi bi-chat-square-text me-2"></i> Posts
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
