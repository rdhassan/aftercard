import { Modal} from 'react-bootstrap';
import './index.scss';
const ThankyouModal = ({ show, handleClose, sizeModal , modalTitle="Modal Title" }) => {
  return (
    <Modal className='aftercard-modal Thankyou' show={show} onHide={handleClose} size={sizeModal} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton className='p-0 border-0'>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='px-0'>
          <div className='thankyou-text'>We will be in touch shortly.</div>
        </Modal.Body>
      </Modal>
  )
}

export default ThankyouModal;