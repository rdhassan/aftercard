import { ListGroup, Navbar } from 'react-bootstrap';
import logo from '../../assets/ac-logo.svg';
import './index.scss';
const SideBar = () => {
  return (
      <div expand="md" className='pt-5 sidebar'>
          <Navbar.Brand href="#home">
            <img src={logo} width="206" alt="no-logo" />
          </Navbar.Brand>

          <ListGroup>
            <ListGroup.Item action href="#link1">
              Dashboard
            </ListGroup.Item>
            <ListGroup.Item action href="#link2">
              Shipments 
            </ListGroup.Item>
          </ListGroup>
      </div>
  )
}

export default SideBar;