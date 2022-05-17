import { Form } from 'react-bootstrap';
import './index.scss';
const InputField = ({placeholder,label, type, isInvalid, style={}, classes }) => {
  return (
    <Form.Group controlId="formBasicEmail" className={classes}>
      {label.length ?<label>{label}</label>:null}
      {type!=='textarea'?<Form.Control type={type} placeholder={placeholder} style={style}/> : <Form.Control as="textarea" rows={5} />}
    </Form.Group>
  )
}

export default InputField;