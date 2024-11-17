import React, { useContext } from 'react';
import './SuserProfile.css';
import { AuthContext } from '@/contexts/auth-context'; // Import the AuthContext to access user details

function SuserProfile() {
  // Access the user details from AuthContext
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="student-profile-container text-center">
      {/* Display user's profile image if available */}
      {/* <img
        src={currentUser?.profileImage || "https://via.placeholder.com/150"}
        alt="Student Profile"
        className="profile-image rounded-circle"
      /> */}
      <h2 className="student-name mt-3">{currentUser?.userName || 'Student Name'}</h2>
      <p className="student-email">{currentUser?.userEmail || 'student@example.com'}</p>
      <div className="student-stats mt-4">
        <p className="stat-item">
        
        </p>
        {/* <button className="btn btn-primary btn-block mt-4">Edit Profile</button> */}
      </div>
    </div>
  );
}

export default SuserProfile;
