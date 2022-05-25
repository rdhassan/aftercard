import { Row, Col,Button,Form } from 'react-bootstrap';
import ContentHeader from '../../component/content-header';
import InputField from '../../component/input-field';
import SideBar from '../../component/sidebar';
import Sheild from '../../assets/ac-sheild.svg'
import './index.scss';

const SettingPage = () => {
  return (
    <div className='dashbordpage setting h-100vh'>
      <SideBar />
      <div className='content p-4'>
        <ContentHeader heading="Settings" subheading="Dashbaord" />
        <div className='inner-content'>
          <div className='my-3'>
            <h2 className='heading'>Widget</h2>
            <Row>
              <Col lg={7}>
                <div className='color-field d-flex align-items-center mb-3'>
                  <Form.Label htmlFor="exampleColorInput">Choose a color for the widget</Form.Label>
                  <div className='inner'>
                    <Form.Control
                      type="color"
                      id="exampleColorInput"
                      defaultValue="#563d7c"
                      title="Choose your color"
                    />
                  </div>
                </div>
                <div className='widget-field d-flex align-items-center justify-content-between mb-3'>
                  <Form.Label htmlFor="exampleColorInput">Change the Font for the widget</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Montserrat</option>
                  </Form.Select>
                </div>
                <div className='widget-field d-flex align-items-center justify-content-between mb-3'>
                  <Form.Label htmlFor="exampleColorInput">Change the Font for the widget</Form.Label>
                  <InputField type="text" placeholder="Type here 0-30 Characters allowed" />
                </div>
                <div className='widget-field d-flex align-items-center justify-content-between mb-3'>
                  <Form.Label htmlFor="exampleColorInput">Upload Icon <small>Icon Must be 40x40 Pixel</small></Form.Label>
                  <Button type="button" className="upload-btn btn btn-primary">Upload<input type="file" multiple="" /></Button>
                </div>
              </Col>
              <Col lg={5} className="d-flex flex-column preview">
                <h6>Preview</h6>
                <div className='insure-pd card flex-1 mb-4 d-flex align-items-center justify-content-center p-lg-5 p-3'>
                  <div className='inner d-flex align-items-center justify-content-between'>
                    <div className='detail-in d-flex align-items-center'>
                      <span className='icon d-flex align-items-center justify-content-center'>
                        <img src={Sheild} />
                      </span>
                      <span className='d-inline-flex mx-3'>Insure the product(s) with Aftercart</span>
                    </div>
                    <Form>
                      <Form.Check 
                        type="switch"
                        id="custom-switch"
                      />
                    </Form>
                  </div>
                </div>
              </Col>
            </Row>
            
            
          </div>
          <div className='my-3'>
            <h2 className='heading'>General</h2>
            <Row>
              <Col lg={12 }>
                <div className='widget-field d-flex align-items-center justify-content-between mb-2'>
                  <Form.Label htmlFor="exampleColorInput">Insurance Widget always ON Check out</Form.Label>
                  <Form>
                      <Form.Check 
                        type="switch"
                        id="custom-switch"
                      />
                    </Form>
                </div>
                <div className='widget-field d-flex align-items-center justify-content-between mb-2'>
                  <Form.Label htmlFor="exampleColorInput">Notification Alert</Form.Label>
                  <Form>
                      <Form.Check 
                        type="switch"
                        id="custom-switch"
                      />
                    </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingPage;