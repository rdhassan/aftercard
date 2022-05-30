import InputField from '../../../component/input-field';
import '././index.scss';
import Edit from '../../../assets/feather-edit.svg'
import { Button, Col, Row } from 'react-bootstrap';

const BillDetail = () => {
  return (
    <div className='bill-details'>
      <h2>Details</h2>
      <div className='edit-field active'>
        <InputField label="Payment Method" placeholder="Credit Card" />
      </div>
      <div className='edit-field'>
        <InputField label="Card Name" placeholder="Card Name" />
        <a href='#' className='edit-action'><img src={Edit} /></a>
      </div>
      <div className='edit-field'>
        <InputField label="Card Number" placeholder="54826 8642 7985 215" />
        <a href='#' className='edit-action'><img src={Edit} /></a>
      </div>
      <Row>
        <Col lg={6}>
          <div className='edit-field'>
            <InputField type="number" label="CVC" placeholder="000" />
            <a href='#' className='edit-action'><img src={Edit} /></a>
          </div>
        </Col>
        <Col lg={6}>
          <div className='edit-field'>
            <InputField type="number" label="Postal Code" placeholder="005426" />
            <a href='#' className='edit-action'><img src={Edit} /></a>
          </div>
        </Col>
      </Row>
      <div className='text-end'>
        <Button className='mt-3'>Save</Button>
        <Button variant='secondary' className='mt-3 ms-2'>Cancel</Button>
      </div>
    </div>
  )
}

export default BillDetail;