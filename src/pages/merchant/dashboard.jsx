import ContentHeader from '../../component/content-header';
import SideBar from '../../component/sidebar';
import backicon from "../../assets/ac-back-button.svg";
import './dashboard.scss';
import { Badge, Row, Col } from 'react-bootstrap';
import InputField from '../../component/input-field';

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
          <Row>
            <Col lg={7}>
              <h2 className='heading'>Customer Details</h2>
              <Row>
                <Col md={6}>
                  <InputField label="Email" type="Email" placeholder="Email" />
                </Col>
                <Col md={6}>
                  <InputField label="Phone Number" type="phone" placeholder="Phone Number" />
                </Col>
                <Col md={12}>
                  <InputField label="Shipping Address" type="phone" placeholder="Address" />
                </Col>
              </Row>

              <h2 className='heading'>Claim Request</h2>
              <Row>
                <Col md={3}>
                  <InputField label="Claim Type" type="text" placeholder="Type" />
                </Col>
                <Col md={3}>
                  <InputField label="Claim Request" type="text" placeholder="Request" />
                </Col>
                <Col md={6}>
                  <InputField label="Claim Issue" type="text" placeholder="Issue" />
                </Col>
              </Row>
            </Col>
            <Col lg={5}>
              <h2 className='heading'>Product Details</h2>
            </Col>
          </Row>
          
        </div>
      </div>
    </div>
  )
}

export default MerchantDashboard;