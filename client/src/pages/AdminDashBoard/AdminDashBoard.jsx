import React from 'react';
import { Container } from 'react-bootstrap';
import '@/pages/AdminDashBoard/AdminDashBoard.css'; // Import custom styles
import AdminNavBar from '@/components/AdminNavBar/AdminNavBar';

function AdminDashboard() {
  return (
    <>
      <AdminNavBar />
      <section className="admin-dashboard-title-section">
        <Container>
          <h1 className="text-center admin-dashboard-title">Admin Dashboard</h1>
        </Container>
      </section>
      <Container className="bbbbb">
        {/* Add additional dashboard content here */}
      </Container>
    </>
  );
}

export default AdminDashboard;
