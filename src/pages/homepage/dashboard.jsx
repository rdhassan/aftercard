import { Form, Navbar, NavDropdown, Nav, Button,FormControl } from 'react-bootstrap';
import Bell from "../../assets/bell.svg";
import Comment from "../../assets/comment-s.svg";
import Setting2x from "../../assets/setting-2x.svg";
import ContentHeader from '../../component/content-header';
import SideBar from '../../component/sidebar';
import './dashboard.scss';
const Dashboard = () => {
  return (
    <div className='dashbordpage h-100vh'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader />
        <div className='inner-content'>
          <div className='welcomeBlk py-5 px-2'>
            <h2>Welcome!</h2>
            <div className='letsget d-flex flex-column align-items-center justify-content-center'>
                <img className='mb-2 rotate' src={Setting2x} />
                <p className='my-1'><strong>Let's get started</strong></p>
                <p className='my-1'>Complete your merchant profile</p>
            </div>
            <a href='#' className='btn-primary btn px-lg-4'><stong>Need assistance?</stong></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;