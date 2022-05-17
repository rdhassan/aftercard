import { Button } from 'react-bootstrap';
import './index.scss';
const SubmitButton = ({ variant, children, classes }) => {
  return (
    <Button className={`px-3 ${classes}`} variant={variant} type="submit">
      {children}
    </Button>
  )
}

export default SubmitButton;