import { Badge } from 'react-bootstrap';
import backicon from "../../../assets/ac-back-button.svg";
import SubmitButton from '../../../component/button';
import './index.scss';

const OrderID = () => {
  return (
    <>
      <div className='orderID d-flex align-items-center justify-content-between flex-wrap'>
        <div className='d-flex align-items-center'>
          <a href='#' className='backbtn'>
            <img src={backicon} alt='no-image' width={40} />
          </a>
          <div className='px-md-4 px-3'>
            <p className='m-0'>Order ID</p>
            <h2 className='mb-0'>#123456789</h2>
          </div>
          <Badge bg="primary" className='text-black fw-normal badge bg-primary py-1 px-2 mt-3'>In Process</Badge>
        </div>
        <div className='actionBtns mt-3 mt-lg-0'>
          <SubmitButton variant="approve" classes="m-1">Approve</SubmitButton>
          <SubmitButton variant="primary" classes="m-1">Deny</SubmitButton>
          <SubmitButton variant="primary" classes="m-1 outline">Withdraw</SubmitButton>
          <SubmitButton variant="assign" classes="m-1">Assign</SubmitButton>
        </div>
      </div>
    </>
  )
}

export default OrderID;