import { Form, FormControl } from 'react-bootstrap';
import './index.scss';

const SearchField = ({tags}) => {
  return (
    <Form className="d-flex flex-column ms-auto seach-blk">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />

      {tags && <div className='tags mt-2'>
        I'm Looking for 
        <a href='#' className='tag'>
          Claim
          <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 11.314 11.314">
            <g id="Group_356" data-name="Group 356" transform="translate(4649 -10424)">
              <rect id="Rectangle_582" data-name="Rectangle 582" width="2" height="14" rx="1" transform="translate(-4649 10425.414) rotate(-45)" fill="#ccc"/>
              <rect id="Rectangle_583" data-name="Rectangle 583" width="2" height="14" rx="1" transform="translate(-4639.101 10424) rotate(45)" fill="#ccc"/>
            </g>
          </svg>
        </a>
        <a href='#' className='tag'>
           Merchants
          <svg className='ms-2' xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 11.314 11.314">
            <g id="Group_356" data-name="Group 356" transform="translate(4649 -10424)">
              <rect id="Rectangle_582" data-name="Rectangle 582" width="2" height="14" rx="1" transform="translate(-4649 10425.414) rotate(-45)" fill="#ccc"/>
              <rect id="Rectangle_583" data-name="Rectangle 583" width="2" height="14" rx="1" transform="translate(-4639.101 10424) rotate(45)" fill="#ccc"/>
            </g>
          </svg>
        </a>
      </div>}
    </Form>
)
}

export default SearchField;