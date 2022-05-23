import ContentHeader from '../../component/content-header';
import SideBar from '../../component/sidebar';
import './dashboard.scss';
import { Row, Col} from 'react-bootstrap';
import OrderID from './orderID';
import CustomerDetails from './custom_details/customer_details';
import ClaimRequest from './claim-request';
import ProductDetails from './product-detail';
import AttachmentSec from './attachments-sections';

const MerchantDashboard = () => {
  

  // function ApproveHandler () {
  //   console.log("approved button");
  // }

  // // const ApproveHandler = () => {
  // //   console.log("approved button");
  // // }
  return (
    <div className='dashbordpage merchant h-100vh'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Claim Details" subheading="Claims" />
        <div className='inner-content'>

          <OrderID />

          <Row>
            <Col lg={7}>
              <CustomerDetails />
              <ClaimRequest />
            </Col>
            <Col lg={5}>
              <ProductDetails />
            </Col>
          </Row>
          
          <AttachmentSec />

          
        </div>
      </div>
    </div>
  )
}

export default MerchantDashboard;