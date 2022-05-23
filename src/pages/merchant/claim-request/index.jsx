import React from "react";
import { Row, Col } from "react-bootstrap";
import InputField from "../../../component/input-field";
import './index.scss';

const ClaimRequest = () => {
  return (
    <>
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
    </>
  );
}

export default ClaimRequest;