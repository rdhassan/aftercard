import { Row, Col,Button,Form } from 'react-bootstrap';
import ContentHeader from '../../component/content-header';
import InputField from '../../component/input-field';
import SideBar from '../../component/sidebar';
import './team.scss';
import editIcon from '../../assets/feather-edit.svg'
import delIcon from '../../assets/delete-svgrepo-com.svg'

const TeamPage = () => {
  return (
    <div className='dashbordpage team h-100vh'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Team" subheading="Dashbaord" />
        <div className='inner-content'>
          <Row className='mt-3'>
            <Col lg={5} className="pe-lg-0">
              <div className='addEmainl d-flex align-items-start'>
                <InputField placeholder="Sample@email.com" /><Button variant="primary">Invite</Button>
              </div>
            </Col>
          </Row>
          <hr className='my-4' />
          <Row className='mt-3'>
            <Col lg={4} md={6} className="mb-4 d-flex">
              <div className='teamMember py-3 px-lg-4 px-3'>
                <h2 className='d-flex align-items-center justify-content-between'>John Doe <a href='#'><img src={delIcon} /></a></h2>
                <p>Assigned (14)</p>
                <div className='email-edit'>
                  <Form.Control type="text" placeholder="Email" value="Sample@email.com" disabled />
                  <a href='#'><img src={editIcon} /></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 d-flex">
              <div className='teamMember py-3 px-lg-4 px-3'>
                <h2 className='d-flex align-items-center justify-content-between'>John Doe <a href='#'><img src={delIcon} /></a></h2>
                <p>Assigned (14)</p>
                <div className='email-edit'>
                  <Form.Control type="text" placeholder="Email" value="Sample@email.com" disabled />
                  <a href='#'><img src={editIcon} /></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 d-flex">
              <div className='teamMember py-3 px-lg-4 px-3'>
                <h2 className='d-flex align-items-center justify-content-between'>John Doe <a href='#'><img src={delIcon} /></a></h2>
                <p>Assigned (14)</p>
                <div className='email-edit'>
                  <Form.Control type="text" placeholder="Email" value="Sample@email.com" disabled />
                  <a href='#'><img src={editIcon} /></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 d-flex">
              <div className='teamMember py-3 px-lg-4 px-3'>
                <h2 className='d-flex align-items-center justify-content-between'>John Doe <a href='#'><img src={delIcon} /></a></h2>
                <p>Assigned (14)</p>
                <div className='email-edit'>
                  <Form.Control type="text" placeholder="Email" value="Sample@email.com" disabled />
                  <a href='#'><img src={editIcon} /></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 d-flex">
              <div className='teamMember py-3 px-lg-4 px-3'>
                <h2 className='d-flex align-items-center justify-content-between'>John Doe <a href='#'><img src={delIcon} /></a></h2>
                <p>Assigned (14)</p>
                <div className='email-edit'>
                  <Form.Control type="text" placeholder="Email" value="Sample@email.com" disabled />
                  <a href='#'><img src={editIcon} /></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 d-flex">
              <div className='teamMember py-3 px-lg-4 px-3'>
                <h2 className='d-flex align-items-center justify-content-between'>John Doe <a href='#'><img src={delIcon} /></a></h2>
                <p>Assigned (14)</p>
                <div className='email-edit'>
                  <Form.Control type="text" placeholder="Email" value="Sample@email.com" disabled />
                  <a href='#'><img src={editIcon} /></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 d-flex">
              <div className='teamMember py-3 px-lg-4 px-3'>
                <h2 className='d-flex align-items-center justify-content-between'>John Doe <a href='#'><img src={delIcon} /></a></h2>
                <p>Assigned (14)</p>
                <div className='email-edit'>
                  <Form.Control type="text" placeholder="Email" value="Sample@email.com" disabled />
                  <a href='#'><img src={editIcon} /></a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 d-flex">
              <div className='teamMember py-3 px-lg-4 px-3'>
                <h2 className='d-flex align-items-center justify-content-between'>John Doe <a href='#'><img src={delIcon} /></a></h2>
                <p>Assigned (14)</p>
                <div className='email-edit'>
                  <Form.Control type="text" placeholder="Email" value="Sample@email.com" disabled />
                  <a href='#'><img src={editIcon} /></a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default TeamPage;