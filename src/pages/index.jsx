import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './homepage/dashboard';
import Login from './login/login';

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Pages;