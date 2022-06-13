import { Row, Col, Form, DropdownButton, Dropdown, FormControl } from 'react-bootstrap';
import ContentHeader from '../../component/content-header';
import SideBar from '../../component/sidebar';
import './index.scss';
import dollor from '../../assets/dollor.svg';
import graph from '../../assets/graph.svg';
import ClaimCard from '../../component/claim-card';
import SearchField from '../../component/seach-field';

const Admin = () => {
  return (
    <div className='dashbordpage admin h-100vh'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Welcome Username," subheading="Dashbaord" />
        <div className='inner-content'>
          <div className='mt-5'>
            <Row>
              <Col lg={8}>
                <SearchField tags />
              </Col>
            </Row>

            <div className='d-flex justify-content-end mb-4 post-day-dropdown'>
              <DropdownButton align="end" id="dropdown-item-button" title="Past 7 Days">
                <Dropdown.Item as="button">Past Month</Dropdown.Item>
                <Dropdown.Item as="button">Past 3 Month</Dropdown.Item>
                <Dropdown.Item as="button">Past Year</Dropdown.Item>
                <Dropdown.Item as="button">All time</Dropdown.Item>
                <Dropdown.Item as="button">Custom</Dropdown.Item>
              </DropdownButton>
            </div>
            
            <Row className='five-column'>
              <Col lg={2} className="px-2">
                <ClaimCard title="Total Protection Fees" value="15" icon={dollor} />
              </Col>
              <Col lg={2} className="px-2">
                <ClaimCard title="Paid Claims Total" value="3" icon={dollor} />
              </Col>
              <Col lg={2} className="px-2">
                <ClaimCard title="Open Claims Total" value="75%" icon={dollor} />
              </Col>
              <Col lg={2} className="px-2">
                <ClaimCard title="Total Value Protected" value="150" icon={dollor} />
              </Col>
              <Col lg={2} className="px-2">
                <ClaimCard title="Total Protected Value Outstanding" value="150" icon={dollor} />
              </Col>
            </Row>

            <Row className='two-column'>
              <Col lg={7} className="px-2 d-flex">
                <div className='grap flex-1'>
                  <img src={graph} />
                </div>
              </Col>
              <Col lg={5} className="px-2">
                <Row className='two-sm-column'>
                  <Col lg={6} className="px-2"><ClaimCard title="Total Merchants" value="150" icon={dollor} /></Col>
                  <Col lg={6} className="px-2"><ClaimCard title="Total Customers" value="2000" icon={dollor} /></Col>
                  <Col lg={6} className="px-2"><ClaimCard title="Total Protected Shipments" value="1,500" icon={dollor} /></Col>
                  <Col lg={6} className="px-2"><ClaimCard title="Average Opt-In Rate" value="86%" icon={dollor} /></Col>
                  <Col lg={6} className="px-2"><ClaimCard title="Average Loss Ratio" value="56%" icon={dollor} /></Col>
                  <Col lg={6} className="px-2"><ClaimCard title="Average Claim completion time" value="1056 h" icon={dollor} /></Col>
                  <Col lg={6} className="px-2"><ClaimCard title="Claims in Backlog" value="1,800" icon={dollor} /></Col>
                  <Col lg={6} className="px-2"><ClaimCard title="Escalated Claims" value="1,890" icon={dollor} /></Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin;              