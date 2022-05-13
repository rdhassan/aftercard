import { Form } from 'react-bootstrap';
import './index.scss';
const InputField = ({placeholder, type, isInvalid }) => {
  return (
    <Form.Group className="my-4" controlId="formBasicEmail">
      <Form.Control type={type} placeholder={placeholder} />
    </Form.Group>
  )
}

export default InputField;