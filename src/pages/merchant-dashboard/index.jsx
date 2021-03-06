import { Col, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import ContentHeader from '../../component/content-header';
import SideBar from '../../component/sidebar';
import './index.scss';
import ArrowUpRight from '../../assets/Arrow-up-right.png'
import RedArrowUpRight from "../../assets/red-arrow-up-right.png"
import { LineChart } from './lineChart';
import CustomDataTable from '../../component/data-table';
import ClaimCard from '../../component/claim-card';
import TclaimIcon from '../../assets/t-claim-icon.svg';
import CclaimIcon from '../../assets/c-claim-icon.svg';
import File from '../../assets/file.svg';

const MainMerchantDashboard = () => {

  return (
    <div className='dashbordpage h-100vh merchant-dash2 admin'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Welcome User," subheading="Dashbaord" />
        <div className='inner-content'>
          <Row>
            <Col lg={4} className='d-flex'>
              <div className='orderProject'>
                <div className='d-flex align-items-center justify-content-between w-100'>
                  <img src={ArrowUpRight} />
                  <div>
                    <p className='m-0'>TOTAL ORDER VALUE PROTECTED</p>
                    <h2>$125,000</h2>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} className='d-flex'>
              <div className='orderProject'>
                <div className='d-flex align-items-center justify-content-between w-100'>
                  <img src={RedArrowUpRight} />
                  <div>
                    <p className='m-0'>% OF ORDERS PROTECTED</p>
                    <h2>75%</h2>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <h2 className='d-flex align-items-center justify-content-between heading border-0'>
                Claims Analytics
                <div className='d-flex justify-content-end post-day-dropdown'>
                  <DropdownButton align="end" id="dropdown-item-button" title="Year">
                    <Dropdown.Item as="button">2000</Dropdown.Item>
                    <Dropdown.Item as="button">2100</Dropdown.Item>
                    <Dropdown.Item as="button">2200</Dropdown.Item>
                    <Dropdown.Item as="button">2300</Dropdown.Item>
                  </DropdownButton>
                </div>
              </h2>
              <div className='lineChart'><LineChart /></div>
            </Col>
          </Row>

          <Row>
            <Col lg={10} md={9}>
              <h2 className='d-flex align-items-center justify-content-between heading mb-0'>Recent Claims</h2>
              <CustomDataTable height="400px" />
            </Col>
            <Col lg={2} md={3} className='analytics-blk ps-0'>
              <h2 className='d-flex align-items-center justify-content-between heading border-0'>Analytics</h2>
              <ClaimCard title="Total Claims" value="18" icon={CclaimIcon}/>
              <ClaimCard title="Total Claims" value="18" icon={File}/>
              <ClaimCard title="Total Claims" value="18" icon={TclaimIcon}/>
            </Col>
          </Row>

        </div>
      </div>
    </div>
  )
}

export default MainMerchantDashboard;