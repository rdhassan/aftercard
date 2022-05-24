import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./homepage/dashboard";
import Login from "./login/login";
import MerchantDetail from "./merchant-detail";
import MerchantDashboard from "./merchant/dashboard";
import TeamPage from "./team/team";

const Pages = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/merchantdashboard' element={<MerchantDashboard />} />
        <Route path='/team' element={<TeamPage />} />
        <Route path='/merchant-detail' element={<MerchantDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Pages;


