import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import SubmitButton from '../../component/button';
import InputField from '../../component/input-field';
import './index.scss';
import RegisterHeader from '../../component/register-header';
const SignUp = () => {
  return (
    <div className='register'>
      <Container fluid className='h-100vh d-flex flex-column'>

        <RegisterHeader />

        <Form className='d-flex flex-column align-items-center justify-content-center py-4'>
          <div className='login-card bg-white w-100'>
            <h3 className='mb-3 ms-0'>Sign Up</h3>
            <Row>
              <Col md={6}>
                <InputField classes="mt-lg-2 mt-4" label="" type="text" placeholder="First Name" style={{background:'#f5f5f5f5'}} /> {/* inputfield */}
              </Col>
              <Col md={6}>
                <InputField classes="mt-lg-2 mt-4" label="" type="text" placeholder="Last Name" style={{background:'#f5f5f5f5'}} /> {/* inputfield */}
              </Col>
            </Row>
            
            <InputField classes="my-4" type="password" placeholder="Password" isInvalid  style={{background:'#f5f5f5f5'}}/> {/* inputfield */}
            <InputField classes="my-4" type="password" placeholder="Confirm Passward" isInvalid  style={{background:'#f5f5f5f5'}}/> {/* inputfield */}
            <div className='d-flex justify-content-between'>
              <a href='#' className='text-primary text-decoration-none invisible'>Forgot Password ?</a>
              <SubmitButton variant="primary">Submit</SubmitButton>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default SignUp;