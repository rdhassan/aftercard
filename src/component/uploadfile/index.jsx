import { Form } from 'react-bootstrap';
import SubmitButton from '../button';
import './index.scss';
const UploadFile = () => {
  return (
    <>
      <div className="upload-file mt-2">
        <SubmitButton variant="secondary">
          <input type="file" />
          <svg xmlns="http://www.w3.org/2000/svg" width="13.496" height="15.424" viewBox="0 0 13.496 15.424">
            <path id="Icon_metro-attachment" data-name="Icon metro-attachment" d="M13.082,6.854,12.1,5.876,7.211,10.767A2.075,2.075,0,1,0,10.146,13.7l5.871-5.87a3.459,3.459,0,1,0-4.892-4.891L4.961,9.1l-.013.013a4.824,4.824,0,0,0,6.823,6.822l.012-.013h0l4.207-4.207-.979-.978L10.8,14.948l-.013.013A3.44,3.44,0,0,1,5.926,10.1l.013-.013h0L12.1,3.919a2.075,2.075,0,0,1,2.935,2.935l-5.871,5.87a.692.692,0,0,1-.979-.978l4.892-4.892Z" transform="translate(-3.535 -1.928)" fill="#575757" />
          </svg>
          Attachments
        </SubmitButton>
      </div>
      <small className='mt-2 d-flex'>4 files Attached</small>
    </>
  )
}

export default UploadFile;