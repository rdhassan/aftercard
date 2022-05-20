import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import './index.scss';
const DropdownSelect = ({title, items=[]}) => {

  return (
      <InputGroup className="select-dropdown">
        <DropdownButton
          variant="outline-secondary"
          title={title}
        >
          {items.map((item, index)=>(<Dropdown.Item key={index} href="#">{item}</Dropdown.Item>))}
          {/* <Dropdown.Item href="#"></Dropdown.Item>
          <Dropdown.Item href="#"></Dropdown.Item>
          <Dropdown.Item href="#"></Dropdown.Item>
          <Dropdown.Item href="#"> Issue</Dropdown.Item> */}
        </DropdownButton>
      </InputGroup>
  )
}

export default DropdownSelect;