import { Form, Navbar, NavDropdown, Nav, Button,FormControl } from 'react-bootstrap';
import Bell from "../../assets/bell.svg";
import Comment from "../../assets/comment-s.svg";
import './index.scss';
const ContentHeader = () => {
  return (
    <Navbar className='content-header p-0 flex-wrap'>
      <div className='content-heading'>
        <h3 className='text-primary m-0'>Dashbaord</h3>
        <h2 className='m-0'>Welcome User,</h2>
      </div>
      <Nav className="ms-auto content-notification py-2">
        <Form className="d-flex ms-auto">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
        </Form>
        <NavDropdown title={<img src={Bell} width="20" />} id="basic-nav-dropdown" align="end">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title={<img src={Comment} width="20" />} id="basic-nav-dropdown1" align="end">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default ContentHeader;