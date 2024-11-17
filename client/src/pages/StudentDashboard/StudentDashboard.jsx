import React, { useState } from 'react';
import './StudentDashboard.css';
import Footer from '../../components/Footer/footer';
import StudentNavBar from '../../components/StudentNavBar/StudentNavBar';
import SuserProfile from '../../components/SuserProfile/SuserProfile';
import CourseSection from '../../components/CourseSection/CourseSection';
import Programs from '../../pages/Programs/Programs';
import LogedNavBar from '../../components/LogedNavBar/LogedNavBar';

const StudentDashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const addCourse = (course) => {
    setEnrolledCourses([...enrolledCourses, course]);
  };

  const removeCourse = (courseId) => {
    setEnrolledCourses(enrolledCourses.filter(course => course.id !== courseId));
  };

  return (
    <>
      <LogedNavBar />
      <div className="container-fluid main-container">
        <div className="row">
          <StudentNavBar />
          <div className="col-lg-9 col-md-8 col-sm-12 right-content">
            <SuserProfile />
            
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentDashboard;
