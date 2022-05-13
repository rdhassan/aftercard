import { ListGroup, Navbar } from 'react-bootstrap';
import logo from '../../assets/ac-logo.svg';
import home from '../../assets/home.svg';
import list from '../../assets/list.svg';
import setting from '../../assets/setting.svg';
import comment2x from '../../assets/comment-2x.svg';
import logout from '../../assets/logout.svg';
import './index.scss';
const SideBar = () => {
  return (
    <div expand="md" className='py-5 sidebar'>
      <div className='top'>
        <Navbar.Brand href="#home" className='me-0'>
          <img src={logo} width="206" alt="no-logo" />
        </Navbar.Brand>

        <ListGroup className='menu'>
          <ListGroup.Item action href="#link1">
            <img src={home} alt="no-logo" /> Dashboard
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            <img src={list} alt="no-logo" /> Shipments
          </ListGroup.Item>
          <ListGroup.Item action href="#link2">
            <img src={setting} alt="no-logo" /> Settings
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div className='bottom'>
        <ListGroup className='menu'>
          <div className='support mb-3'>
            <img src={comment2x} alt="no-logo" />
            <a href='#' className='sup-link text-decoration-none text-center'>Support</a>
          </div>
          <ListGroup.Item action href="#link1">
            <img src={logout} alt="no-logo" /> Log-Out
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}

export default SideBar;