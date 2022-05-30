import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin";
import Dashboard from "./homepage/dashboard";
import Login from "./login/login";
import MerchantDetail from "./merchant-detail";
import MerchantDashboard from "./merchant/dashboard";
import SettingPage from "./setting";
import SignUp from "./signup";
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
        <Route path='/setting' element={<SettingPage />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Pages;


