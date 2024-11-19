import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '@/components/ProgramNav/ProgramNav.css';

function ProgramNav() {
  return (
    <div className="container-fluid bg-white">
      <Navbar expand="md" className="justify-content-center">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-center">
            <Nav className="my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/researchers" className="px-3 text-primary">Proposals</Nav.Link>
              <Nav.Link href="/projects" className="px-3 text-primary">Ongoing Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default ProgramNav;
