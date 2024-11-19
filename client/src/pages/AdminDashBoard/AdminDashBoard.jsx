import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '@/pages/AdminDashBoard/AdminDashBoard.css'; // Import any custom styles
import AdminNavBar from '@/components/AdminNavBar/AdminNavBar';

function AdminDashboard() {
  return (
    <>
    <AdminNavBar></AdminNavBar>
    <Container className="mt-4">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      
  

    
     
    </Container>
    
    </>
  );
}

export default AdminDashboard;
