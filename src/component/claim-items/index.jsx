import { Form } from 'react-bootstrap';
import defualtImage from "../../assets/ac-uploaded-image.svg";
import './index.scss';
const ClaimItems = ({ title, type, price }) => {
  return (
    <li className='mb-3'>
      <div className='item-image d-flex'>
        <Form.Check
          type="checkbox"
          className='me-3'
        />
        <img src={defualtImage} alt='no-image' />
      </div>
      <div className='item-detail ps-3'>
        <p className='my-0'>{title}</p>
        <p className='my-0'><small>{type}</small></p>
        <p className='my-0 price-text'><strong>{price}</strong></p>
      </div>
    </li>
  )
}

export default ClaimItems;