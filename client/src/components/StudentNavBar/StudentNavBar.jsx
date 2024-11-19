import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons
import '@/components/StudentNavBar/StudentNavBar.css';

function StudentNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
    {/* Mobile View - Hamburger Icon */}
    <div className="d-lg-none d-flex justify-content-center text-center justify-items-center bg-primary text-white p-3">
      <h4 className="text-white">Dashboard</h4>
      <button
        className=" text-white bg-dark-blue"
        onClick={toggleMobileMenu}
      >
        <i className="bi bi-list " style={{ fontSize: '1.5rem' }}></i>
      </button>
    </div>
    {/* Sidebar for large screens or mobile view when toggled */}
    <div
      className={`sidebar student-nav-container bg-dark-blue text-white border ${
        isMobileMenuOpen ? 'd-block' : 'd-none d-lg-block'
      }`}
    >
      <nav className="nav flex-column p-3" id="student-sidebar">
        <h4 className="text-white mb-4">Dashboard Menu</h4>
        <ul className="navbar-nav">
          <li className="nav-item mb-3">
            <a href="/studentdashboard" className="nav-link text-white">
              <i className="bi bi-house-door-fill me-2"></i> Dashboard
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/courses" className="nav-link text-white">
              <i className="bi bi-journal-text me-2"></i> Courses
            </a>
          </li>
          <li className="nav-item mb-3">
            <a href="/programs" className="nav-link text-white">
              <i className="bi bi-diagram-3-fill me-2"></i> Programs
            </a>
          </li>
       
        </ul>
      </nav>
    </div>
  </>
);
}


export default StudentNavBar;
