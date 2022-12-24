import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Nav className="me-auto">
            <Link className='me-auto nav-link' to="/">HOME</Link>
            <Link className='btn btn-outline-light' to="/users/add">ADD USER</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default BasicExample;