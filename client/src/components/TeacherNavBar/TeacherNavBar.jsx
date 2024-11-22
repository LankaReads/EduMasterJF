import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function TeacherNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCourseModal, setShowCourseModal] = useState(false);
  const [courseName, setCourseName] = useState('');
  const [courseId, setCourseId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleCourseClick = () => {
    setShowCourseModal(true); // Show the modal when "Courses" is clicked
  };
  const handleCloseModal = () => {
    setShowCourseModal(false);
    setErrorMessage('');
  };
  const handleCourseSubmit = () => {
    // Validate input (you can customize this logic)
    if (courseName === 'Neuro Science' && courseId === '673f0a7c72c5ad766918fe5b') {
      // Navigate to the course page if valid
      navigate(`/teacheropencourse/${courseId}`);
    } 
    // First else if condition
    else if (courseName === 'Bio Medical Physics' && courseId === '673f0aec72c5ad766918fe5d') {
      // Navigate to the respective course page
      navigate(`/teacheropencourse/${courseId}`);
    }
    // Second else if condition
    else if (courseName === 'health care Data Science' && courseId === '673f0b4272c5ad766918fe5f') {
      // Navigate to the respective course page
      navigate(`/teacheropencourse/${courseId}`);
    } 
    else {
      // Show error message if invalid
      setErrorMessage('Invalid course name or ID. Please try again.');
    }
  };
  return (
    <>
    {/* Hamburger Icon for Mobile View */}
    <div className="d-lg-none d-flex justify-content-between bg-primary text-white p-3">
      <h4 className="text-white">Dashboard</h4>
      <button className="text-white" onClick={toggleMobileMenu}>
        <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
      </button>
    </div>
    {/* Sidebar for larger screens or mobile menu when toggled */}
    <div
      className={`col-lg-3 col-md-4 col-sm-12 sidebar bg-primary text-white border ${
        isMobileMenuOpen ? 'd-block' : 'd-none d-lg-block'
      }`}
    >
      <nav className="nav flex-column p-3">
        <h4 className="text-white">Dashboard Menu</h4>
        <ul className="navbar-nav">
          <li className="nav-item mb-3">
            <a href="/teacherdashboard" className="nav-link text-white">
              <i className="bi bi-house-door-fill me-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="#" onClick={handleCourseClick} className="nav-link text-white">
              <i className="bi bi-journal-text me-2"></i> Courses
            </a>
          </li>
       
        </ul>
      </nav>
    </div>
    {/* Modal for entering course name and ID */}
    <Modal show={showCourseModal} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Enter Course Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCourseName">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter course name"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formCourseId">
            <Form.Label>Course ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter course ID"
              value={courseId}
              onChange={(e) => setCourseId(e.target.value)}
            />
          </Form.Group>
        </Form>
        {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCourseSubmit}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}


export default TeacherNavBar;
