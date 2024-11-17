import React, { useState } from 'react';
import CourseSection from '../../components/CourseSection/CourseSection';
import './Courses.css';
import Footer from '../../components/Footer/footer';
import NavBar from '../../components/navBar/Nav';
import ProgramNav from '@/components/ProgramNav/ProgramNav';

function Courses() {

  return (
    <>
      <NavBar />
      {/* <ProgramNav /> */}
     
          <CourseSection />
        
    
      <Footer />
    </>
  );
}

export default Courses;
