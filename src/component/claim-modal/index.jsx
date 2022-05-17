import { Row, Col, Button,  Modal} from 'react-bootstrap';
import SubmitButton from '../button';
import InputField from '../input-field';
import './index.scss';
const ClaimModal = ({ show, handleClose, sizeModal , modalTitle="Modal Title" }) => {
  return (
    <Modal className='aftercard-modal claim' show={show} onHide={handleClose} size={sizeModal} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton className='p-0 border-0'>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='px-0'>
          <Row>
            <Col md={12}>
              <InputField label="" classes="my-2" type="email" placeholder="Email" style={{background:'#f5f5f5f5'}} />
            </Col>
            <Col md={12}>
              <InputField label="" classes="my-2" type="number" placeholder="Tracking number" style={{background:'#f5f5f5f5'}} />
            </Col>
          </Row>
          <div className='mt-3 text-end'>
            <SubmitButton>Submit</SubmitButton>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default ClaimModal;