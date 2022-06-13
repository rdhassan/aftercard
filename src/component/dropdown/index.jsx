import React, {useState} from "react";
import { InputGroup, DropdownButton, Dropdown } from 'react-bootstrap';
import './index.scss';
const DropdownSelect = ({title, items=[]}) => {
  const [selectedItem,setSelectedItem] = useState('');

  return (
      <InputGroup className="select-dropdown">
        <DropdownButton
          variant="outline-secondary"
          title={selectedItem || title}
          onSelect={(eventKey)=>{setSelectedItem(eventKey)}}
        >
          {items.map((item, index)=>(
          <Dropdown.Item key={index} href="#" eventKey={item} >{item}</Dropdown.Item>
          ))}
        </DropdownButton>
      </InputGroup>
  )
}

export default DropdownSelect;