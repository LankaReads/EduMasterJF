import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Modal, Form } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from "../../components/navBar/Nav";
import Footer from "../../components/Footer/footer";
import StudentNavBar from "../../components/StudentNavBar/StudentNavBar";
import './TeacherOpenCourse.css';
import LogedNavBar from '@/components/LogedNavBar/LogedNavBar';
import TeacherNavBar from '@/components/TeacherNavBar/TeacherNavBar';

const TeacherOpenCourse = () => {
  const { courseId } = useParams(); // Get courseId from the URL
  const [course, setCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddWeekModal, setShowAddWeekModal] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);
  const [newWeekData, setNewWeekData] = useState({
    video: '',
    pdf: '',
    quiz: '',
    resources: ['']
  });
  const navigate = useNavigate();

  // Fetch the course details using courseId
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://13.60.226.150:5000/api/courses/${courseId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch course details');
        }
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    };
    fetchCourseDetails();
  }, [courseId]);

  const handleShowModal = (weekData, index) => {
    setSelectedWeek(index);
    setNewWeekData({
      video: weekData.video,
      pdf: weekData.pdf,
      quiz: weekData.quiz,
      resources: weekData.resources
    });
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedWeek(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'resources') {
      setNewWeekData({
        ...newWeekData,
        resources: value.split(',').map(item => item.trim()) // Convert comma-separated values to an array
      });
    } else {
      setNewWeekData({
        ...newWeekData,
        [name]: value
      });
    }
  };

  const handleSaveChanges = async () => {
    try {
      const updatedWeeks = [...course.weeks];
      updatedWeeks[selectedWeek] = newWeekData;

      const response = await fetch(`http://13.60.226.150:5000/api/courses/${courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ weeks: updatedWeeks }),
      });

      if (!response.ok) {
        throw new Error('Failed to update course weeks');
      }

      setCourse((prevCourse) => ({ ...prevCourse, weeks: updatedWeeks }));
      handleCloseModal();
    } catch (error) {
      console.error("Error updating course weeks:", error);
    }
  };

  const handleDeleteWeek = async (index) => {
    const updatedWeeks = course.weeks.filter((_, idx) => idx !== index);
    try {
      const response = await fetch(`http://13.60.226.150:5000/api/courses/${courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ weeks: updatedWeeks }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete week');
      }

      setCourse((prevCourse) => ({ ...prevCourse, weeks: updatedWeeks }));
    } catch (error) {
      console.error("Error deleting course week:", error);
    }
  };

  const handleShowAddWeekModal = () => {
    setNewWeekData({
      video: '',
      pdf: '',
      quiz: '',
      resources: ['']
    });
    setShowAddWeekModal(true);
  };

  const handleCloseAddWeekModal = () => {
    setShowAddWeekModal(false);
  };

  const handleAddNewWeek = async () => {
    try {
      const updatedWeeks = [...course.weeks, newWeekData];

      const response = await fetch(`http://13.60.226.150:5000/api/courses/${courseId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ weeks: updatedWeeks }),
      });

      if (!response.ok) {
        throw new Error('Failed to add new week');
      }

      setCourse((prevCourse) => ({ ...prevCourse, weeks: updatedWeeks }));
      handleCloseAddWeekModal();
    } catch (error) {
      console.error("Error adding new week:", error);
    }
  };

  if (!course) {
    return <div>Loading...</div>; // Display loading until course is fetched
  }

  return (
    <>
      <LogedNavBar />
      <div className="d-flex">
        <TeacherNavBar />
        <Container className="open-course-container py-5 ms-auto">
          <Row>
            <Col className="text-center mb-4">
              <h1 className="course-title">{course.title}</h1>
              <h3 className="course-teacher"> Instructor Name: {course.teacher}</h3>
            </Col>
          </Row>

          {course.weeks.map((weekData, index) => (
            <Row key={index} className="mb-4">
              <Col>
                <Card className="shadow-sm">
                  <Card.Header className="bg-primary text-white d-flex justify-content-between">
                    <h4>Week {index + 1}</h4>
                    <Button variant="danger" onClick={() => handleDeleteWeek(index)}>Delete</Button>
                  </Card.Header>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <strong>Lecture Video:</strong>
                        <a href={weekData.video} target="_blank" rel="noopener noreferrer" className="ms-2">
                          Watch Video
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Lecture PDF:</strong>
                        <a href={weekData.pdf} target="_blank" rel="noopener noreferrer" className="ms-2">
                          Download PDF
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Quiz:</strong>
                        <a href={weekData.quiz} target="_blank" rel="noopener noreferrer" className="ms-2">
                          Take Quiz
                        </a>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <strong>Additional Resources:</strong>
                        <ul className="ms-4">
                          {weekData.resources.map((resource, idx) => (
                            <li key={idx}>
                              <a href={resource} target="_blank" rel="noopener noreferrer">
                                {`Resource ${idx + 1}`}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </ListGroup.Item>
                    </ListGroup>
                    <Button variant="info" onClick={() => handleShowModal(weekData, index)}>Edit Week</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}

          <Button variant="success" onClick={handleShowAddWeekModal}>Add New Week</Button>

          {/* Modal for editing existing week */}
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Week Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formVideo">
                  <Form.Label>Lecture Video</Form.Label>
                  <Form.Control
                    type="url"
                    name="video"
                    value={newWeekData.video}
                    onChange={handleChange}
                    placeholder="Enter video URL"
                  />
                </Form.Group>
                <Form.Group controlId="formPDF">
                  <Form.Label>Lecture PDF</Form.Label>
                  <Form.Control
                    type="url"
                    name="pdf"
                    value={newWeekData.pdf}
                    onChange={handleChange}
                    placeholder="Enter PDF URL"
                  />
                </Form.Group>
                <Form.Group controlId="formQuiz">
                  <Form.Label>Quiz</Form.Label>
                  <Form.Control
                    type="url"
                    name="quiz"
                    value={newWeekData.quiz}
                    onChange={handleChange}
                    placeholder="Enter quiz URL"
                  />
                </Form.Group>
                <Form.Group controlId="formResources">
                  <Form.Label>Additional Resources (comma separated)</Form.Label>
                  <Form.Control
                    type="text"
                    name="resources"
                    value={newWeekData.resources.join(', ')}
                    onChange={handleChange}
                    placeholder="Resource URLs"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSaveChanges}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

          {/* Modal for adding new week */}
          <Modal show={showAddWeekModal} onHide={handleCloseAddWeekModal}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Week</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formNewVideo">
                  <Form.Label>Lecture Video</Form.Label>
                  <Form.Control
                    type="url"
                    name="video"
                    value={newWeekData.video}
                    onChange={handleChange}
                    placeholder="Enter video URL"
                  />
                </Form.Group>
                <Form.Group controlId="formNewPDF">
                  <Form.Label>Lecture PDF</Form.Label>
                  <Form.Control
                    type="url"
                    name="pdf"
                    value={newWeekData.pdf}
                    onChange={handleChange}
                    placeholder="Enter PDF URL"
                  />
                </Form.Group>
                <Form.Group controlId="formNewQuiz">
                  <Form.Label>Quiz</Form.Label>
                  <Form.Control
                    type="url"
                    name="quiz"
                    value={newWeekData.quiz}
                    onChange={handleChange}
                    placeholder="Enter quiz URL"
                  />
                </Form.Group>
                <Form.Group controlId="formNewResources">
                  <Form.Label>Additional Resources (comma separated)</Form.Label>
                  <Form.Control
                    type="text"
                    name="resources"
                    value={newWeekData.resources.join(', ')}
                    onChange={handleChange}
                    placeholder="Resource URLs"
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseAddWeekModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleAddNewWeek}>
                Add Week
              </Button>
            </Modal.Footer>
          </Modal>

        </Container>
      </div>
      <Footer />
    </>
  );
};

export default TeacherOpenCourse;
