
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
            <Nav.Link className='navlinks' href="/admindashboard"> <span className='dropDownNav'>Admin-Home</span></Nav.Link>
            <Nav.Link className='navlinks' href="/admincourse"><span className='dropDownNav'>Admin-Courses</span></Nav.Link>
            <Nav.Link className='navlinks' href="/adminblogs"> <span className='dropDownNav'>Admin-blog</span></Nav.Link>
            <Nav.Link className='navlinks' href="/adminposts"> <span className='dropDownNav'>Admin-posts</span></Nav.Link>
            <Nav.Link className='navlinks' href="/adminresearch"> <span className='dropDownNav'>Admin-research</span></Nav.Link>
            <Nav.Link className='navlinks' href="/adminprojects"> <span className='dropDownNav'>Admin-projects</span></Nav.Link>
            
            {/* <Nav.Link href="/teacheropencourse">Admin-teacher</Nav.Link> */}
            
         
       
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </>
  )
}

export default AdminNavBar