import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom"; // To get the courseId from the URL
import NavBar from "../../components/navBar/Nav";
import Footer from "../../components/Footer/footer";
import StudentNavBar from "../../components/StudentNavBar/StudentNavBar";
import "./OpenCourse.css";
import LogedNavBar from "@/components/LogedNavBar/LogedNavBar";
import ProgramNav from "@/components/ProgramNav/ProgramNav";

const OpenCourse = () => {
  const { courseId } = useParams(); // Get courseId from the URL
  const [course, setCourse] = useState(null);

  // Fetch the course details using courseId
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/courses/${courseId}`);
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

  if (!course) {
    return <div>Loading...</div>; // Display loading until course is fetched
  }

  return (
    <>
      <NavBar/>
      

      <div className="d-flex">
        
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
                  <Card.Header className="bg-primary text-white">
                    <h4>Week {index + 1}</h4>
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
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default OpenCourse;
