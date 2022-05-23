import React from "react";
import { Row, Col } from "react-bootstrap";
import InputField from "../../../component/input-field";

const CustomerDetails = () => {
  return (
    <>
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
    </>
  );
}

export default CustomerDetails;