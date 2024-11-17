import React from 'react';
import './StudentUserProfile.css';
import Footer from '../../components/Footer/footer';

import StudentNavBar from '../../components/StudentNavBar/StudentNavBar';

import SuserProfile from '../../components/SuserProfile/SuserProfile';
import NavBar from '../../components/navBar/Nav';
import LogedNavBar from '../../components/LogedNavBar/LogedNavBar';


const StudentUserProfile = () => {

  return (
    <>
      <LogedNavBar/>
      <div className=" container-fluid ">
        <div className="row">
          {/* Left Sidebar: Navigation Menu */}
          <StudentNavBar/>
          

          {/* Right Content: Student Info and Courses */}
          <div className="col-lg-9 col-md-8 col-sm-12">
           <SuserProfile/>
         
           
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default StudentUserProfile;
