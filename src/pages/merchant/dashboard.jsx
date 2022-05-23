import ContentHeader from '../../component/content-header';
import SideBar from '../../component/sidebar';
import backicon from "../../assets/ac-back-button.svg";
import plus from "../../assets/ac-add-a-note.svg";
import shopify from "../../assets/ac-shopify-icom.svg";
import byDefault from "../../assets/ac-uploaded-image.svg";
import expand from "../../assets/awesome-expand-arrows-alt.svg";
import info from "../../assets/awesome-exclamation-triangle.svg";

import './dashboard.scss';
import { Badge, Row, Col, Carousel, Button, Modal } from 'react-bootstrap';
import InputField from '../../component/input-field';
import ClaimItems from '../../component/claim-items';
import SubmitButton from '../../component/button';
import React, { useState } from 'react';
import PictureModal from '../../component/picture-modal';
const MerchantDashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='dashbordpage merchant h-100vh'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Claim Details" subheading="Claims" />
        <div className='inner-content'>
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
          <Row>
            <Col lg={7}>
              <h2 className='heading'>Customer Details</h2>
              <Row>
                <Col md={6}>
                  <InputField label="Email" type="Email" placeholder="Email" />
                </Col>
                <Col md={6}>
                  <InputField label="Phone Number" type="phone" placeholder="Phone Number" />
                </Col>
                <Col md={12}>
                  <InputField label="Shipping Address" type="phone" placeholder="Address" />
                </Col>
              </Row>

              <h2 className='heading'>Claim Request</h2>
              <Row>
                <Col md={3}>
                  <InputField label="Claim Type" type="text" placeholder="Type" />
                </Col>
                <Col md={3}>
                  <InputField label="Claim Request" type="text" placeholder="Request" />
                </Col>
                <Col md={6}>
                  <InputField label="Claim Issue" type="text" placeholder="Issue" />
                </Col>
              </Row>
            </Col>
            <Col lg={5}>
              <h2 className='heading'>Product Details</h2>
              <Row className='align-items-end'>
                <Col md={9} className="cl-value pe-lg-0">
                  <InputField label="Claim Value" type="number" placeholder="Value" />
                </Col>
                <Col md={3} className="text-md-center mb-10">
                  <label className='w-100'>Order Source</label>
                  <a href='#'>
                    <img src={shopify} height="40" />
                  </a>
                </Col>
              </Row>
              <label>5 Products in claim</label>
              <ul className='claim-items p-0 m-0'>
                <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50" />
                <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50" />
                <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50" />
                <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50" />
                <ClaimItems title="Product Name Product Name Product Name Product" type="Product Type" price="$50" />
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={7}>
              <h2 className='heading'>Attachments</h2>
            </Col>
          </Row>
          <Row>
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
        </div>
      </div>
    </div>
  )
}

export default MerchantDashboard;