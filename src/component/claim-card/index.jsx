import { Button } from 'react-bootstrap';

import './index.scss';

const ClaimCard = ({title,value,icon}) => {
  return (
    <div className='claim-card'>
      <img src={icon} width="30" />
      <p className='m-0'>{title}</p>
      <h2 className='m-0'>{value}</h2>
    </div>
  )
}

export default ClaimCard;