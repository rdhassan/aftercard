import { Carousel, Modal } from 'react-bootstrap';
import byDefault from "../../assets/ac-uploaded-image.svg";
import homepic from "../../assets/home.svg";
import './index.scss';
const PictureModal = ({show, handleClose}) => {
  return (
    <Modal className='imageViewer' show={show} onHide={handleClose} centered >
      <Modal.Header className='border-0 px-0' closeButton />
      <Carousel indicators={false}>
        <Carousel.Item>
          <img src={byDefault} width="100%" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={homepic} width="100%" />
        </Carousel.Item>
      </Carousel>
    </Modal>
  )
}

export default PictureModal;