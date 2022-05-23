import { Carousel } from 'react-bootstrap';
import { Badge, Col, Row, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import SubmitButton from '../../../component/button';
import plus from "../../../assets/ac-add-a-note.svg";
import byDefault from "../../../assets/ac-uploaded-image.svg";
import expand from "../../../assets/awesome-expand-arrows-alt.svg";
import info from "../../../assets/awesome-exclamation-triangle.svg";
import './index.scss';
import PictureModal from '../../../component/picture-modal';
const AttachmentSec = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row>
        <Col lg={7}>
          <h2 className='heading'>Attachments</h2>
        </Col>
        <Col lg={7}>
          <Row>
            <Col lg={6}>
              <div className='attachment-heading'>
                <p className="inner d-flex justify-content-between align-items-center">
                  Notes
                  <a href='#'><img src={plus} alt='no-image' width={20} /></a>
                </p>
              </div>
              <Carousel className='notes-slider mb-5' variant="dark" touch={true} controls={false}>
                <Carousel.Item>
                  <div className='note-card d-flex flex-column justify-content-between p-4'>
                    <div className='scroll pe-lg-5'>
                      <h6 className='note-card-title mb-0'>Title of the Note</h6>
                      <p className='note-card-detail'>At vero eos et accusamus et iusto odio dignissimos ducimus qui bla ditiis praesentium voluptatum de leniti atque corrupti quos dolores et quas molestia</p>
                      <p className='note-card-detail'>At vero eos et accusamus et iusto odio dignissimos ducimus qui bla ditiis praesentium voluptatum de leniti atque corrupti quos dolores et quas molestia</p>
                      <span className='card-btm-corner'></span>
                    </div>
                    <div className='date-text'>
                      14 April 2022 at 3:28 Pm
                    </div>
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className='note-card d-flex flex-column justify-content-between p-4'>
                    <div className='scroll pe-lg-5'>
                      <h6 className='note-card-title mb-0'>Title of the Note</h6>
                      <p className='note-card-detail'>At vero eos et accusamus et iusto odio dignissimos ducimus qui bla ditiis praesentium voluptatum de leniti atque corrupti quos dolores et quas molesti</p>
                      <span className='card-btm-corner'></span>
                    </div>
                    <div className='date-text'>
                      14 April 2022 at 3:28 Pm
                    </div>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col lg={6}>
              <div className='attachment-heading'>
                <p className="inner d-flex justify-content-between align-items-center">
                  Chats
                </p>
              </div>
              <Carousel className='notes-slider chat-slider mb-5' variant="dark" touch={true} controls={false} indicators={false}>
                <Carousel.Item>
                  <div className='note-card d-flex flex-column justify-content-between p-3'>
                    <div className='bg-white p-3'>
                      <div className='scroll pe-lg-5'>
                        <p className='note-card-detail'>At vero eos et accusamus et iusto odio dignissimos ducimus qui bla ditiis praesentium voluptatum de leniti atque corrupti quos dolores et quas molestia</p>
                        <p className='note-card-detail'>At vero eos et accusamus et iusto odio dignissimos ducimus qui bla ditiis praesentium voluptatum de leniti atque corrupti quos dolores et quas molestia</p>
                      </div>
                      <div className='date-text pt-0'>
                        14 April 2022 at 3:28 Pm
                      </div>
                    </div>
                    <Button variant="primary" className='chat-btn active'>Chat History</Button>
                  </div>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Col>
        <Col lg={5}>
          <Row>
            <Col md={7}>
              <div className='attachment-heading'>
                <p className="inner d-flex justify-content-between align-items-center">
                  Evidence
                </p>
              </div>
              <div className="pic-list">
                <ul className='d-flex scroll-bar p-0'>
                  <li className='d-flex flex-column'>
                    <div className='img-block'>
                      <img src={byDefault} alt="" />
                      <span className='expand' onClick={handleShow}><img src={expand} width="10" /></span>
                    </div>
                    <div className='img-block'>
                      <img src={byDefault} alt="" />
                      <span className='expand'><img src={expand} width="10" /></span>
                    </div>
                  </li>
                  <li className='d-flex flex-column'>
                    <div className='img-block'>
                      <img src={byDefault} alt="" />
                      <span className='expand'><img src={expand} width="10" /></span>
                    </div>
                    <div className='img-block'>
                      <img src={byDefault} alt="" />
                      <span className='expand'><img src={expand} width="10" /></span>
                    </div>
                  </li>
                  <li className='d-flex flex-column'>
                    <div className='img-block'>
                      <img src={byDefault} alt="" />
                      <span className='expand'><img src={expand} width="10" /></span>
                    </div>
                    <div className='img-block'>
                      <img src={byDefault} alt="" />
                      <span className='expand'><img src={expand} width="10" /></span>
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={5} className="ps-md-0 d-flex">
              <div className="request-block d-flex justify-content-center align-items-center flex-column w-100">
                <img src={info} className="mb-3" />
                <h6 className='req-title'>Request</h6>
                <p>Request more info, if the provided data isn't enough</p>
                <SubmitButton variant="assign">Request</SubmitButton>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <PictureModal show={show} handleClose={handleClose} />
    </>
  )
}

export default AttachmentSec;