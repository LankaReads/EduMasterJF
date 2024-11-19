import React, { useState } from 'react';
import '@/components/TuserProfile/TuserProfile.css';
import { Modal, Button, Form } from 'react-bootstrap'; // Import Modal and other components from react-bootstrap
import { useNavigate } from 'react-router-dom';

function TuserProfile() {
  const navigate = useNavigate(); // Initialize the navigate function from react-router-dom
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [courseName, setCourseName] = useState(''); // State for course name input
  const [courseId, setCourseId] = useState(''); // State for course ID input
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages

  // Function to handle profile click and show the modal
  const handleProfileClick = () => {
    setShowModal(true);
    setErrorMessage(''); // Reset error message when opening modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setErrorMessage(''); // Reset error message when closing modal
  };

  // Function to handle course submission
  const handleCourseSubmit = () => {
    // Validate input (you can customize this logic)
    if (courseName === 'Maths' && courseId === '6718e4cf8cf9d87533998bfa') {
      navigate(`/teacheropencourse/${courseId}`); // Navigate to the course page if valid
    } else if (courseName === 'Physics' && courseId === '6718e4cf8cf9d87533998bfd') {
      navigate(`/teacheropencourse/${courseId}`); // Navigate to the respective course page
    } else if (courseName === 'ThirdCourse' && courseId === '11223') {
      navigate(`/teacheropencourse/${courseId}`); // Navigate to the respective course page
    } else {
      setErrorMessage('Invalid course name or ID. Please try again.'); // Show error message if invalid
    }
  };

  return (
    <div className="container mt-5 justify-content-center">
      <div className="row">
        <div className="col-lg-4 col-md-10 col-sm-12 text-center">
          <div className="student-profile-container">
            <h2 className="student-name mt-3" onClick={handleProfileClick}>Jinendra</h2>
            <p className="student-email">jinendra@gmail.com</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-10 col-sm-12 text-center">
          <div className="student-profile-container">
            <h2 className="student-name mt-3" onClick={handleProfileClick}>Ravindu</h2>
            <p className="student-email">ravinduasiri.com</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-10 col-sm-12 text-center">
          <div className="student-profile-container">
            <h2 className="student-name mt-3" onClick={handleProfileClick}>Priyanga</h2>
            <p className="student-email">priyanga@example.com</p>
          </div>
        </div>
      </div>

      {/* Modal for entering course name and ID */}
      <Modal show={showModal} onHide={handleCloseModal}>
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
    </div>
  );
}

export default TuserProfile;
