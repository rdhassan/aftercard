import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/ac-logo.svg';
import './index.scss';
const RegisterHeader = () => {
  return (
      <Navbar expand="md" className='pt-5 header'>
        <Container fluid >
          <Navbar.Brand href="#home"><img src={logo} alt="no-logo" /></Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='menu' id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"  className='contactus btn my-2'>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse> */}
        </Container>
      </Navbar>
  )
}

export default RegisterHeader;