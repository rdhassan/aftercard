import { Col, Dropdown, DropdownButton, Row, Button, Form, FormControl } from 'react-bootstrap';
import ContentHeader from '../../component/content-header';
import SideBar from '../../component/sidebar';
import './index.scss';
import CustomDataTable from '../../component/data-table';
import Pluse from '../../assets/pluse.svg'

const AdminClaimDashboard = () => {

  return (
    <div className='dashbordpage h-100vh merchant-dash2 admin'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Claims List" subheading="Claims" />
        <div className='inner-content'>
          <div className='claim-head d-inline-flex py-4'>
            <Button className='d-inline-flex align-items-center'><img src={Pluse} width="12px" className='me-2 d-none d-md-inline-block' /> File a Claim</Button>
            <Form className="d-flex flex-column ms-3 seach-blk">
              <FormControl
                type="search"
                placeholder="Search for a Claim"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </div>
          <Row>
            <Col lg={12}>
              <h2 className='d-flex align-items-center justify-content-between heading mb-0 flex-wrap py-0'>
                <span>Claims</span>
                <div className='actionBtns my-2 mt-lg-0 post-day-dropdown d-flex align-items-center flex-wrap'>
                  <Button variant="primary" className="m-1">In Process</Button>
                  <Button variant="green text-white" className="m-1">Approved</Button>
                  <Button variant="light-red text-white" className="m-1">Denied</Button>
                  <Button variant="assign" className="m-1">Withdrawn</Button>
                  <DropdownButton className='m-1' align="end" id="dropdown-item-button" title="Past 7 Days">
                    <Dropdown.Item as="button">Past Month</Dropdown.Item>
                    <Dropdown.Item as="button">Past 3 Month</Dropdown.Item>
                    <Dropdown.Item as="button">Past Year</Dropdown.Item>
                    <Dropdown.Item as="button">All time</Dropdown.Item>
                    <Dropdown.Item as="button">Custom</Dropdown.Item>
                  </DropdownButton>
                </div>
              </h2>
              <CustomDataTable height="30rem" />
            </Col>
          </Row>

        </div>
      </div>
    </div>
  )
}

export default AdminClaimDashboard;