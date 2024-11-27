import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CourseSection.css';

const CourseSection = ({ enrolledCourses = [], removeCourse }) => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('https://13.60.226.150:5000/api/courses');
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

  const isEnrolled = (courseId) => {
    return enrolledCourses.some((course) => course._id === courseId);
  };

  const handleOpenCourse = (courseId) => {
    navigate(`/opencourse/${courseId}`);
  };

  return (
    <>
      <div className="container-fluid main-container item-center d-flex justify-content-center">
        <div className="row">
          <div className=" align-items-center">
            <div className="programs-section py-4">
            <h3 className="text-center text-dark mb-4 titlecourse">Available Programs</h3>
              <div className="row">
                {courses.map((course) => (
                  !isEnrolled(course._id) && (
                    <div key={course._id} className="col-md-6 col-lg-4 mb-4">
                      
                      <Card className="h-100 shadow-sm">
                        <Card.Img variant="top" src={course.image} />
                        <Card.Body className="d-flex flex-column">
                          <Card.Title>{course.title}</Card.Title>
                          <Card.Text><strong>Teacher:</strong> {course.teacher}</Card.Text>
                          <Card.Text>{course.description}</Card.Text>
                          <div className="mt-auto">
                            <Button
                              variant="info"
                              onClick={() => handleOpenCourse(course._id)}
                              className="mb-2"
                            >
                              Open Course
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSection;
