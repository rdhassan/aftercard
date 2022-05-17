import { Row, Col, Button,  Modal} from 'react-bootstrap';
import SubmitButton from '../button';
import InputField from '../input-field';
import UploadFile from '../uploadfile';
import './index.scss';
const HelpModal = ({ show, handleClose, sizeModal , modalTitle="Modal Title" }) => {
  return (
    <Modal className='aftercard-modal' show={show} onHide={handleClose} size={sizeModal} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton className='p-0 border-0'>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='px-0'>
          <Row>
            <Col md={4}>
              <InputField label="Order ID" classes="my-2" />
            </Col>
            <Col md={12}>
              <InputField label="Subject" classes="my-2" />
            </Col>
            <Col md={12}>
              <InputField label="Description" type="textarea" classes="my-2" />
            </Col>
            <Col md={4}>
              <UploadFile />
            </Col>
          </Row>
          <div className='mt-3 text-end'>
            <SubmitButton>Submit</SubmitButton>
          </div>
        </Modal.Body>
      </Modal>
  )
}

export default HelpModal;