import { Button } from 'react-bootstrap';
import './index.scss';
const SubmitButton = ({ variant, children }) => {
  return (
    <Button className="px-3" variant={variant} type="submit">
      {children}
    </Button>
  )
}

export default SubmitButton;