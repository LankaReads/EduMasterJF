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
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>

              {/* Consistent Style for Nav Links */}
              <Nav.Link href="/" className={`nav-link-custom mx-1 ${isActive('/')} navlinks`}>
                <i className="bi bi-house-door me-2 dropDownNav"></i> <span className='dropDownNav'>Home</span>
              </Nav.Link>

              {/* Programs Multilevel Dropdown */}
              <NavDropdown  
                title={
                  <>
                    <i className="bi bi-journal-bookmark me-2 dropDownNav"></i> 
                    <span className="dropDownNav">Programmes</span>
                  </>
                }
                className="custom-dropdown"
                id="programmes-dropdown"
              >
                <NavDropdown.Item href="/researchers" className="dropdown-item-custom">
                  Our Researchers
                </NavDropdown.Item>
                <NavDropdown.Item href="/courses" className="dropdown-item-custom">
                  Courses
                </NavDropdown.Item>
                <NavDropdown.Item href="/projects" className="dropdown-item-custom">
                  Projects
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title={
                  <>
                    <i className="bi bi-journal-bookmark mx-1 dropDownNav"></i> 
                    <span className="dropDownNav">Posts</span>
                  </>
                }
                className="custom-dropdown"
                id="posts-dropdown"
              >
                <NavDropdown.Item href="/blogs" className="dropdown-item-custom">
                  Blogs
                </NavDropdown.Item>
                <NavDropdown.Item href="/post" className="dropdown-item-custom">
                  Posts
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/about" className={`nav-link-custom mx-1 ${isActive('/about')} navlinks`}>
                <i className="bi bi-info-circle me-2 dropDownNav"></i> <span className='dropDownNav'>About</span>
              </Nav.Link>

              <Nav.Link href="/contact" className={`nav-link-custom mx-1 ${isActive('/contact')} navlinks`}>
                <i className="bi bi-chat-square-text me-2 dropDownNav"></i> <span className='dropDownNav'>Contact</span>
              </Nav.Link>
              
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;