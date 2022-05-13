import { Container, Form, Button } from 'react-bootstrap';
import SideBar from '../../component/sidebar';
import './dashboard.scss';
const Dashboard = () => {
  return (
    <div className='dashbordpage h-100vh'>
      <SideBar />
    </div>
  )
}

export default Dashboard;