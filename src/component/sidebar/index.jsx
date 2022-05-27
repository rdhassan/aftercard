import { ListGroup, Navbar } from 'react-bootstrap';
import logo from '../../assets/ac-logo.svg';
import home from '../../assets/home.svg';
import list from '../../assets/list.svg';
import setting from '../../assets/setting.svg';
import comment2x from '../../assets/comment-2x.svg';
import logout from '../../assets/logout.svg';
import Team from '../../assets/team.svg';
import FileBlack from '../../assets/file-black.svg';
import Transition from '../../assets/transition.svg';
import './index.scss';
import { Link } from 'react-router-dom';
const SideBar = () => {
  
  const logoutHandler = () => {
    // LOGOUT FUNCTION
    console.log("Logout function called");
  }

  return (
    <>
      <label className='toggle-sidebar d-flex m-0'>
        <input type="checkbox" />
        <div expand="md" className='py-5 sidebar flex-1'>
          <div className='top'>
            <Navbar.Brand href="#home" className='me-0'>
              <img src={logo} width="206" alt="no-logo" />
            </Navbar.Brand>

            <ListGroup className='menu'>
              <ListGroup.Item action href="#link1">
                <img src={home} alt="no-logo" /> Dashboard
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                <img src={list} alt="no-logo" /> Claims
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                <img src={FileBlack} alt="no-logo" /> Merchants
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                <img src={Team} alt="no-logo" /> Team
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                <img src={Transition} alt="no-logo" /> Transactions
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
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
              <ListGroup.Item onClick={logoutHandler} action href="#a">
                <img src={logout} alt="no-logo" /> Log-Out
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </label>
    </>
  )
}

export default SideBar;