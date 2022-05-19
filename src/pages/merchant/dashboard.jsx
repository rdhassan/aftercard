import ContentHeader from '../../component/content-header';
import SideBar from '../../component/sidebar';
import backicon from "../../assets/ac-back-button.svg";
import './dashboard.scss';
import { Badge } from 'react-bootstrap';

const MerchantDashboard = () => {
  return (
    <div className='dashbordpage merchant h-100vh'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Claim Details" subheading="Claims"/>
        <div className='inner-content'>
          <div className='orderID d-flex align-items-end'>
            <a href='#' className='backbtn'>
              <img src={backicon} alt='no-image' width={40} />
            </a>
            <div className='px-4'>
              <p className='m-0'>Order ID</p>
              <h2 className='mb-0'>#123456789</h2>
            </div>
            <Badge bg="primary" className='text-black fw-normal badge bg-primary py-1 px-2 mb-1'>In Process</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MerchantDashboard;