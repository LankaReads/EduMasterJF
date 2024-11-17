import { useState } from 'react';
import { Button, Container, Navbar, Modal, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import logo1 from "../../img/logo1.png";
import './LogedNavBar.css';

function LogedNavBar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleLogout = () => {
    // Perform your logout logic here, like clearing tokens
    console.log("User logged out");

    // Redirect to home page after log out
    navigate('/');
  };

  return (
    <>
      <div className='container-fluid bg-body-secondary'>
        <Navbar expand="md" className="">
          <Container fluid>
            {/* Left side: Logo */}
            <Navbar.Brand href="/">
              <img src={logo1} alt="Logo" className='logo1' />
            </Navbar.Brand>

            {/* Right side: Log Out Button */}
            <Navbar.Collapse className="justify-content-end">
              <Button variant="outline-info" onClick={handleShow}>
                Log Out
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Modal for log out confirmation */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <Card className="text-center p-4">
            <Card.Body>
              <Card.Title>Are you sure you want to log out?</Card.Title>
              <Button variant="outline-info" onClick={handleLogout}>
                Yes, Log Out
              </Button>
              <Button variant="secondary" className="ms-3" onClick={handleClose}>
                Cancel
              </Button>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LogedNavBar;
