import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import '@/pages/Programs/Programs.css';
import StudentNavBar from '@/components/StudentNavBar/StudentNavBar';
import Footer from '@/components/Footer/footer';
import LogedNavBar from '@/components/LogedNavBar/LogedNavBar';
import NavBar from '@/components/navBar/Nav';
import ProgramNav from '@/components/ProgramNav/ProgramNav';

const Programs = ({ addCourse, enrolledCourses = [], removeCourse }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([]); // Courses fetched from the backend

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`https://13.60.226.150/api/courses`); // Ensure the endpoint is correct
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json();
        setCourses(data); // Update the state with fetched courses
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const isEnrolled = (courseId) => {
    return enrolledCourses.some((course) => course.id === courseId);
  };

  const handleEnrollClick = (course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const handleConfirmEnroll = () => {
    if (selectedCourse) {
      addCourse(selectedCourse);
    }
    setShowModal(false);
  };

  return (
    <>
      <NavBar />
      {/* <ProgramNav /> */}
      <div className="container-fluid d-flex justify-content-center py-4">
        <div className="programs-section">
          <h2 className="text-center text-blue mb-4">Available Programs</h2>
          <div className="d-flex flex-wrap justify-content-center">
            {courses.map((course) => (
              !isEnrolled(course._id) && ( // Use _id for MongoDB
                <div key={course._id} className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 d-flex justify-content-center">
                  <Card className="h-100 shadow-sm hover-card">
                    <Card.Img variant="top" src={course.image} />
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="course-title">{course.title}</Card.Title>
                      <Card.Text>
                        <strong>Teacher:</strong> {course.teacher}
                      </Card.Text>
                      <Card.Text>{course.description}</Card.Text>
                      <Button
                        className="mt-auto btn btn-primary enroll-btn"
                        onClick={() => handleEnrollClick(course)}
                      >
                        Enroll
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              )
            ))}
          </div>

          {/* Enrollment Confirmation Modal */}
          <Modal show={showModal} onHide={() => setShowModal(false)} centered>
            <Modal.Header closeButton>
              <Modal.Title>Confirm Enrollment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to enroll in <strong>{selectedCourse?.title}</strong>?
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleConfirmEnroll}>
                Yes, Enroll
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
