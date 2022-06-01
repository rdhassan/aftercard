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
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  const goto = (route) => {
    navigate(route, { replace: true })
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
              <ListGroup.Item action onClick={() => goto("/")} as="a">
                  <img src={home} alt="no-logo" /> Dashboard
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => goto("/merchantdashboard")} as="a">
                  <img src={list} alt="no-logo" /> Claims
              </ListGroup.Item>
              <ListGroup.Item action  onClick={() => goto("/merchant-detail")} as="a">
                <img src={FileBlack} alt="no-logo" /> Merchants
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => goto("/team")} as="a">
                <img src={Team} alt="no-logo" /> Team
              </ListGroup.Item>
              <ListGroup.Item action onClick={() => goto("/")} as="a">
                <img src={Transition} alt="no-logo" /> Transactions
              </ListGroup.Item>
              <ListGroup.Item action  onClick={() => goto("/setting")} as="a">
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
              <ListGroup.Item onClick={() => goto("/login")} as="a">
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