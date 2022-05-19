import { useState} from 'react';
import {Button} from 'react-bootstrap';
import Setting2x from "../../assets/setting-2x.svg";
import ClaimFormModal from '../../component/claim-form-modal';
import ClaimModal from '../../component/claim-modal';
import ContentHeader from '../../component/content-header';
import HelpModal from '../../component/help-modal';
import SideBar from '../../component/sidebar';
import ThankyouModal from '../../component/thankyou-modal';
import './dashboard.scss';

const Dashboard = () => {

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

  return (
    <div className='dashbordpage h-100vh'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Welcome User," subheading="Dashbaord" />
        <div className='inner-content d-flex align-items-center justify-content-center'>
          <div className='welcomeBlk py-5 px-2'>
            <h2>Welcome!</h2>
            <div className='letsget d-flex flex-column align-items-center justify-content-center'>
              <img className='mb-2 rotate' src={Setting2x} />
              <p className='my-1'><strong>Let's get started</strong></p>
              <p className='my-1'>Complete your merchant profile</p>
            </div>
            <a href='#' className='btn-primary btn px-lg-4 m-2'><stong>Need assistance?</stong></a>
            <Button className='m-2' variant="primary" onClick={handleShow}>
              Help modal
            </Button>
            <Button className='m-2' variant="primary" onClick={handleShow2}>
              claim modal
            </Button>
            <Button className='m-2' variant="primary" onClick={handleShow3}>
              Thankyou modal
            </Button>
            <Button className='m-2' variant="primary" onClick={handleShow4}>
              claim Form modal
            </Button>
          </div>
        </div>
      </div>



      <HelpModal modalTitle="We're here to help!" show={show} handleClose={handleClose} sizeModal="lg"  />

      <ClaimModal modalTitle="File a Claim" show={show2} handleClose={handleClose2} sizeModal="md" />
      
      
      <ThankyouModal modalTitle="Thank You!" show={show3} handleClose={handleClose3} sizeModal="md" />
      
      
      <ClaimFormModal modalTitle="Thank You!" show={show4} handleClose={handleClose4} sizeModal="lg" />



    </div>
  )
}

export default Dashboard;