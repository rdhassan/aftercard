import React from "react";
import { Row, Col } from "react-bootstrap";
import InputField from "../../../component/input-field";
import shopify from "../../../assets/ac-shopify-icom.svg";
import ClaimItems from "../../../component/claim-items";
const ProductDetails = () => {
  return (
    <>
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
    </>
  );
}

export default ProductDetails;