import { Container, Form, Button } from 'react-bootstrap';
import SubmitButton from '../../component/button';
import InputField from '../../component/input-field';
import './login.scss';
import RegisterHeader from '../../component/register-header';
const Login = () => {
  return (
    <div className='register'>
      <Container fluid className='h-100vh d-flex flex-column'>

        <RegisterHeader />

        <Form className='d-flex flex-column align-items-center justify-content-center py-4'>
          <div className='login-card bg-white w-100'>
            <h3 className='mb-3 ms-0'>Log In</h3>

            <InputField classes="my-4" label="" type="email" placeholder="Email" style={{background:'#f5f5f5f5'}} /> {/* inputfield */}
            <InputField classes="my-4" type="number" placeholder="Order ID" isInvalid  style={{background:'#f5f5f5f5'}}/> {/* inputfield */}
            <div className='d-flex justify-content-between'>
              <a href='#' className='text-primary text-decoration-none'>Forgot Password ?</a>
              <SubmitButton variant="primary">Submit</SubmitButton>
            </div>
          </div>
        </Form>
      </Container>
    </div>
  )
}

export default Login;