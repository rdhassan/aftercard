
import { NavDropdown } from 'react-bootstrap';
import './index.scss';
const NotificationsMessages = ({title, count, image, viewall}) => {
  return (
    <>
      <div className='inner-head'>
        <img src={image} width="24" className='me-3' /> <span>{title} <small className='ms-2 mt-1'>{count}</small></span>
      </div>
      <div className='inner-body'>
        <NavDropdown.Item href="#">
          <p className='m-0'>Claim has been Filed against order ID#123456789</p>
          <p className='m-0 text-end'><small>14 April 2022 at 3:28 Pm</small></p>
        </NavDropdown.Item>
        <NavDropdown.Item className='active' href="#">
          <p className='m-0'>Claim has been Filed against order ID#123456789</p>
          <p className='m-0 text-end'><small>14 April 2022 at 3:28 Pm</small></p>
        </NavDropdown.Item>
        <NavDropdown.Item className='active' href="#">
          <p className='m-0'>Claim has been Filed against order ID#123456789</p>
          <p className='m-0 text-end'><small>14 April 2022 at 3:28 Pm</small></p>
        </NavDropdown.Item>
        <NavDropdown.Item className='active' href="#">
          <p className='m-0'>Claim has been Filed against order ID#123456789</p>
          <p className='m-0 text-end'><small>14 April 2022 at 3:28 Pm</small></p>
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          <p className='m-0'>Claim has been Filed against order ID#123456789</p>
          <p className='m-0 text-end'><small>14 April 2022 at 3:28 Pm</small></p>
        </NavDropdown.Item>
        <NavDropdown.Item href="#">
          <p className='m-0'>Claim has been Filed against order ID#123456789</p>
          <p className='m-0 text-end'><small>14 April 2022 at 3:28 Pm</small></p>
        </NavDropdown.Item>
      </div>
      <div className='inner-footer'>
        <NavDropdown.Item href="#">{viewall}</NavDropdown.Item>
      </div>
    </>
  )
}

export default NotificationsMessages;