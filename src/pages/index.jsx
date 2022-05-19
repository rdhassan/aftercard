import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./homepage/dashboard";
import Login from "./login/login";
import MerchantDashboard from "./merchant/dashboard";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/merchantdashboard' element={<MerchantDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Pages;


