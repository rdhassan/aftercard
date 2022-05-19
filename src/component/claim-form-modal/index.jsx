import { useState } from 'react';
import { Row, Col, Button, Modal, Form, } from 'react-bootstrap';
import SubmitButton from '../button';
import InputField from '../input-field';
import './index.scss';
import backicon from "../../assets/ac-back-button.svg";
import ClaimItems from '../claim-items';
import defualtImage from "../../assets/ac-uploaded-image.svg";


const ClaimFormModal = ({ show, handleClose, sizeModal, modalTitle = "Modal Title" }) => {
  const [files, setFiles] = useState([]);
  return (
    <Modal className='aftercard-modal claim-form' show={show} onHide={handleClose} size={sizeModal} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body className='py-0 px-0 ps-md-5'>
        <a href='#' className='backbtn'>
          <img src={backicon} alt='no-image' width={30} />
        </a>
        <Row>
          <Col md={6}>
            <h2>File a Claim</h2>
            <ul className='fileClaim-list p-0 m-0'>
              <li>
                <p className='mute-text m-0'>Order ID</p>
                <p className='m-0'>#123456789</p>
              </li>
              <li>
                <p className='mute-text m-0'>Email Address</p>
                <p className='m-0'>Sample@email.com</p>
              </li>
            </ul>
            <h2 className='mb-3'>Claim Request</h2>
            <Row>
              <Col md={6}>
                <div className="aftercard-select">
                  <Form.Select>
                    <option>Claim Type</option>
                  </Form.Select>
                </div>
              </Col>
              <Col md={6}>
                <div className="aftercard-select">
                  <Form.Select>
                    <option>Request</option>
                  </Form.Select>
                </div>
              </Col>
              <Col md={12}>
                <div className="aftercard-select">
                  <Form.Select>
                    <option>Claim Issue</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>
            <h2 className='mt-4 mb-3 d-flex flex-wrap align-items-center justify-content-between'>
              <span className='d-flex flex-column'>
                Attachments
                <small>5 Attachments</small>
              </span>
              <Button variant="primary" className='upload-btn'>
                Upload
                <input type="file" multiple onChange={(e) => setFiles((prevState) => [...prevState, ...e.target.files])} />
              </Button>
            </h2>
            <ul className='attachment-file-list'>

              {// condition ? <true case> : <false case> ;
              }
              {files.length ?
                files.map((item, index) => (

                  <li key={index}>
                    <a href='#' className='btn-close'></a>
                    <img src={URL.createObjectURL(item)} alt='no-image' />
                    <p>{index + 1}</p>
                  </li>
                )) : <li>
                  <a href='#' className='btn-close'></a>
                  <img src={defualtImage} alt='no-image' />
                  <p>0</p>
                </li>}
            </ul>
          </Col>
          <Col md={6}>
            <h2 className='mb-3 d-flex flex-wrap align-items-center justify-content-between'>
              Select the Items in this Claim
              <small className='2x-text'>Total Products 03</small>
            </h2>
            <ul className='claim-items p-0 m-0'>
              <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50"/>
              <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50"/>
              <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50"/>
              <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50"/>
              <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50"/>
            </ul>
            <div className='d-flex justify-content-end'>
              <Form.Check type="checkbox" className='mt-3' label="Select All" />
            </div>

            <h2 className='border-0'>Message us</h2>
            <InputField label="" type="textarea" classes="my-2" placeholder="Tracking number" style={{ background: '#f5f5f5f5' }} />
          </Col>
        </Row>
        <div className='mt-3'>
          <Form.Check type="checkbox" className='me-3' label= "I confirm the above information to be accurate" />
          <SubmitButton classes="me-2">Submit</SubmitButton>
          <SubmitButton classes="me-2" variant="primary outline">Cancel</SubmitButton>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default ClaimFormModal;