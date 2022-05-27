import { Row, Col, Form } from 'react-bootstrap';
import ContentHeader from '../../component/content-header';
import SideBar from '../../component/sidebar';
import './index.scss';
import backicon from "../../assets/ac-back-button.svg";
import defaultLogo from '../../assets/default-logo.svg';
import defaultImg from '../../assets/defualt-sm.svg';
import file from '../../assets/file.svg';
import Check from '../../assets/check.svg';
import InputField from '../../component/input-field';
import ClaimCard from '../../component/claim-card';

const MerchantDetail = () => {
  return (
    <div className='dashbordpage merchant merchant-detail h-100vh'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Merchants" subheading="Dashbaord" />
        <div className='inner-content'>
          <div className='merchant-detail-header orderID d-flex align-items-center justify-content-between flex-wrap mb-2'>
            <div className='d-flex align-items-center w-100'>
              <a href='#' className='backbtn'>
                <img src={backicon} alt='no-image' width={40} />
              </a>
              <div className='d-flex flex-wrap align-items-center justify-content-between ps-md-4 ps-3 flex-1'>
                <h2 className='my-2 opacity-75'>Merchant's Store Name</h2>
                <img src={defaultLogo} />
              </div>
            </div>
          </div>

          <Row>
            <Col lg={6}>
              <h2 class="heading border-0">Products (50)</h2>
            </Col>
            <Col lg={6}>
              <h2 class="heading">Value Edit</h2>

              <h6>Change Product Rate</h6>
              <div className='product-detail d-flex flex-wrap align-items-center'>
                <div className='pd-in flex-1 my-2'>
                  <img src={defaultImg} />
                  <span>Product Name Details</span>
                </div>
                <Form.Control type="number" placeholder="Product Rate" />
                <img src={Check} />
              </div>

              <h2 className='heading'>Details</h2>
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

              <h2 className='heading'>Claim Details</h2>
              <Row>
                <Col sm={6}>
                  <ClaimCard title="All Claims" value="15" icon={file} />
                </Col>
                <Col sm={6}>
                  <ClaimCard title="Open Claims" value="3" icon={file} />
                </Col>
                <Col sm={6}>
                  <ClaimCard title="AfterCart Opt-In Rate" value="75%" icon={file} />
                </Col>
                <Col sm={6}>
                  <ClaimCard title="Products" value="150" icon={file} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default MerchantDetail;