import React, { useState, useEffect } from 'react';
import { Card, Button, Modal, Form, Container } from 'react-bootstrap';
import '@/pages/AdminCourse/AdminCourse.css';

import Footer from '../../components/Footer/footer';
import AdminNavBar from '../../components/AdminNavBar/AdminNavBar';

const AdminCourse = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddWeekModal, setShowAddWeekModal] = useState(false);
  const [showEditCourseModal, setShowEditCourseModal] = useState(false);
  const [showEditWeekModal, setShowEditWeekModal] = useState(false);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [newCourseData, setNewCourseData] = useState({
    title: '',
    teacher: '',
    description: '',
    image: '',
    weeks: [],
  });
  const [newWeekData, setNewWeekData] = useState({
    video: '',
    pdf: '',
    quiz: '',
    resources: [],
  });
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(null);

  // Fetch courses from the backend
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`https://13.60.226.150/api/courses`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    fetchCourses();
  }, []);

  const handleShowAddCourseModal = () => setShowModal(true);
  const handleCloseAddCourseModal = () => {
    setShowModal(false);
    setNewCourseData({ title: '', teacher: '', description: '', image: '', weeks: [] });
  };

  const handleShowEditCourseModal = (course) => {
    setSelectedCourse(course);
    setNewCourseData(course);
    setShowEditCourseModal(true);
  };

  const handleCloseEditCourseModal = () => {
    setShowEditCourseModal(false);
    setSelectedCourse(null);
  };

  const handleShowAddWeekModal = (course) => {
    setSelectedCourse(course);
    setShowAddWeekModal(true);
  };

  const handleCloseAddWeekModal = () => {
    setShowAddWeekModal(false);
    setNewWeekData({ video: '', pdf: '', quiz: '', resources: [] });
  };

  const handleShowEditWeekModal = (week, index) => {
    setSelectedWeekIndex(index);
    setNewWeekData(week);
    setShowEditWeekModal(true);
  };

  const handleCloseEditWeekModal = () => {
    setShowEditWeekModal(false);
    setSelectedWeekIndex(null);
  };

  const handleChangeWeek = (e) => {
    const { name, value } = e.target;
    if (name === "resources") {
      setNewWeekData({ ...newWeekData, [name]: value.split(',').map(res => res.trim()) });
    } else {
      setNewWeekData({ ...newWeekData, [name]: value });
    }
  };

  const handleAddNewCourse = async () => {
    try {
      const response = await fetch('https://13.60.226.150/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourseData),
      });
      if (response.ok) {
        const savedCourse = await response.json();
        setCourses([...courses, savedCourse]);
        handleCloseAddCourseModal();
      } else {
        console.error('Error adding course');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditCourse = async () => {
    try {
      const response = await fetch(`https://13.60.226.150/api/courses/${selectedCourse._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourseData),
      });

      if (response.ok) {
        const updatedCourse = await response.json();
        setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
        handleCloseEditCourseModal();
      } else {
        console.error('Error updating course');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleAddNewWeek = async () => {
    if (selectedCourse) {
      try {
        const response = await fetch(`https://13.60.226.150/api/courses/${selectedCourse._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...selectedCourse,
            weeks: [...selectedCourse.weeks, newWeekData],
          }),
        });

        if (response.ok) {
          const updatedCourse = await response.json();
          setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
          handleCloseAddWeekModal();
        } else {
          console.error('Error updating course');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleEditWeek = async () => {
    if (selectedCourse !== null && selectedWeekIndex !== null) {
      const updatedWeeks = [...selectedCourse.weeks];
      updatedWeeks[selectedWeekIndex] = newWeekData;

      try {
        const response = await fetch(`https://13.60.226.150/api/courses/${selectedCourse._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...selectedCourse,
            weeks: updatedWeeks,
          }),
        });

        if (response.ok) {
          const updatedCourse = await response.json();
          setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
          handleCloseEditWeekModal();
        } else {
          console.error('Error updating week');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleRemoveCourse = async (courseId) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      try {
        const response = await fetch(`https://13.60.226.150/api/courses/${courseId}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          setCourses(courses.filter(course => course._id !== courseId));
        } else {
          console.error('Error deleting course');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  const handleRemoveWeek = async (weekIndex) => {
    if (selectedCourse) {
      const updatedWeeks = selectedCourse.weeks.filter((_, index) => index !== weekIndex);
      try {
        const response = await fetch(`https://13.60.226.150/api/courses/${selectedCourse._id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...selectedCourse,
            weeks: updatedWeeks,
          }),
        });

        if (response.ok) {
          const updatedCourse = await response.json();
          setCourses(courses.map(course => (course._id === updatedCourse._id ? updatedCourse : course)));
          setSelectedCourse(updatedCourse);
        } else {
          console.error('Error removing week');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <>
      <AdminNavBar />
      <br /><br /><br />
      <Container fluid className="main-container">
        <h3 className="text-center text-dark mb-4">Admin Course Management</h3>
        <Button className="mb-4" onClick={handleShowAddCourseModal}>Add New Course</Button>
        <div className="row">
          {courses.map((course) => (
            <div key={course._id} className="col-md-6 col-lg-4 mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={course.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{course.title}</Card.Title>
                  <Card.Text><strong>Teacher:</strong> {course.teacher}</Card.Text>
                  <Card.Text>{course.description}</Card.Text>
                  <Button className="mt-auto btn btn-warning" onClick={() => handleShowEditCourseModal(course)}>
                    Edit Course
                  </Button>
                  <Button className="mt-auto btn btn-danger" onClick={() => handleRemoveCourse(course._id)}>
                    Remove Course
                  </Button>
                  <Button className="mt-auto btn btn-info" onClick={() => handleShowAddWeekModal(course)}>
                    Add Week
                  </Button>
                  <div className="container mt-4">
    <h5 className="text-center mb-4">Course Weeks</h5>
    <div className="list-group">
        {course.weeks.map((week, index) => (
            <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                <p className="mb-0">{`Week ${index + 1}: Video - ${week.video}, PDF - ${week.pdf}`}</p>
               {/* <div>
                    <Button variant="secondary" onClick={() => handleShowEditWeekModal(week, index)} className="me-2">
                        Edit Week
                    </Button>
                    <Button variant="danger" onClick={() => handleRemoveWeek(index)}>
                        Remove Week
                    </Button>
                </div>*/}
            </div>
        ))}
    </div>
</div>

                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Add Course Modal */}
      <Modal show={showModal} onHide={handleCloseAddCourseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formCourseTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter course title" value={newCourseData.title} onChange={(e) => setNewCourseData({ ...newCourseData, title: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formCourseTeacher">
              <Form.Label>Teacher</Form.Label>
              <Form.Control type="text" placeholder="Enter teacher's name" value={newCourseData.teacher} onChange={(e) => setNewCourseData({ ...newCourseData, teacher: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formCourseDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter course description" value={newCourseData.description} onChange={(e) => setNewCourseData({ ...newCourseData, description: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formCourseImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="Enter image URL" value={newCourseData.image} onChange={(e) => setNewCourseData({ ...newCourseData, image: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddCourseModal}>Close</Button>
          <Button variant="primary" onClick={handleAddNewCourse}>Add Course</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Course Modal */}
      <Modal show={showEditCourseModal} onHide={handleCloseEditCourseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEditCourseTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Enter course title" value={newCourseData.title} onChange={(e) => setNewCourseData({ ...newCourseData, title: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formEditCourseTeacher">
              <Form.Label>Teacher</Form.Label>
              <Form.Control type="text" placeholder="Enter teacher's name" value={newCourseData.teacher} onChange={(e) => setNewCourseData({ ...newCourseData, teacher: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formEditCourseDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter course description" value={newCourseData.description} onChange={(e) => setNewCourseData({ ...newCourseData, description: e.target.value })} />
            </Form.Group>
            <Form.Group controlId="formEditCourseImage">
              <Form.Label>Image URL</Form.Label>
              <Form.Control type="text" placeholder="Enter image URL" value={newCourseData.image} onChange={(e) => setNewCourseData({ ...newCourseData, image: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditCourseModal}>Close</Button>
          <Button variant="primary" onClick={handleEditCourse}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* Add Week Modal */}
      <Modal show={showAddWeekModal} onHide={handleCloseAddWeekModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Week</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formWeekVideo">
              <Form.Label>Video URL</Form.Label>
              <Form.Control type="text" placeholder="Enter video URL" value={newWeekData.video} onChange={handleChangeWeek} name="video" />
            </Form.Group>
            <Form.Group controlId="formWeekPDF">
              <Form.Label>PDF URL</Form.Label>
              <Form.Control type="text" placeholder="Enter PDF URL" value={newWeekData.pdf} onChange={handleChangeWeek} name="pdf" />
            </Form.Group>
            <Form.Group controlId="formWeekQuiz">
              <Form.Label>Quiz URL</Form.Label>
              <Form.Control type="text" placeholder="Enter quiz URL" value={newWeekData.quiz} onChange={handleChangeWeek} name="quiz" />
            </Form.Group>
            <Form.Group controlId="formWeekResources">
              <Form.Label>Resources (comma-separated)</Form.Label>
              <Form.Control type="text" placeholder="Enter resources" value={newWeekData.resources.join(', ')} onChange={handleChangeWeek} name="resources" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddWeekModal}>Close</Button>
          <Button variant="primary" onClick={handleAddNewWeek}>Add Week</Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Week Modal */}
      <Modal show={showEditWeekModal} onHide={handleCloseEditWeekModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Week</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formEditWeekVideo">
              <Form.Label>Video URL</Form.Label>
              <Form.Control type="text" placeholder="Enter video URL" value={newWeekData.video} onChange={handleChangeWeek} name="video" />
            </Form.Group>
            <Form.Group controlId="formEditWeekPDF">
              <Form.Label>PDF URL</Form.Label>
              <Form.Control type="text" placeholder="Enter PDF URL" value={newWeekData.pdf} onChange={handleChangeWeek} name="pdf" />
            </Form.Group>
            <Form.Group controlId="formEditWeekQuiz">
              <Form.Label>Quiz URL</Form.Label>
              <Form.Control type="text" placeholder="Enter quiz URL" value={newWeekData.quiz} onChange={handleChangeWeek} name="quiz" />
            </Form.Group>
            <Form.Group controlId="formEditWeekResources">
              <Form.Label>Resources (comma-separated)</Form.Label>
              <Form.Control type="text" placeholder="Enter resources" value={newWeekData.resources.join(', ')} onChange={handleChangeWeek} name="resources" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEditWeekModal}>Close</Button>
          <Button variant="primary" onClick={handleEditWeek}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
};

export default AdminCourse;
