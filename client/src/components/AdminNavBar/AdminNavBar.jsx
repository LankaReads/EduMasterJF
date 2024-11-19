
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import logo1 from "../../img/logo1.png";
import '@/components/AdminNavBar/AdminNavBar.css'


function AdminNavBar() {
  return (
    <>
    <div className='container-fluid bg-body-secondary'>
    <Navbar expand="md" className="">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo1} alt="" className='logo1' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '180px' }}
            navbarScroll
          >
            <Nav.Link href="/admindashboard">Admin-Home</Nav.Link>
            <Nav.Link href="/admincourse">Admin-Courses</Nav.Link>
            <Nav.Link href="/adminblogs">Admin-blog</Nav.Link>
            <Nav.Link href="/adminposts">Admin-posts</Nav.Link>
            <Nav.Link href="/adminresearch">Admin-research</Nav.Link>
            <Nav.Link href="/adminprojects">Admin-projects</Nav.Link>
            
            <Nav.Link href="/teacherdashboard">Admin-teacher</Nav.Link>
            
         
       
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default AdminNavBar