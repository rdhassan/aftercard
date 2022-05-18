import { Form, Navbar, NavDropdown, Nav, Button, FormControl } from 'react-bootstrap';
import Comment from "../../assets/comment-s.svg";
import Bell from "../../assets/bell.svg";
import './index.scss';
import NotificationsMessages from '../notifications'
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

        <NavDropdown className='action-link comment' title={<img src={Comment} width="20" />} id="basic-nav-dropdown1" align="end">
          <NotificationsMessages image={Comment} title="Comments" count="(8)" />
        </NavDropdown>
        <NavDropdown className='action-link notification' title={<img src={Bell} width="20" />} id="basic-nav-dropdown" align="end">
          <NotificationsMessages image={Bell}  title="Notifications" count="(6)" />
        </NavDropdown>
      </Nav>
    </Navbar>
  )
}

export default ContentHeader;