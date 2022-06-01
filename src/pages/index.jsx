import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin";
import Dashboard from "./homepage/dashboard";
import Login from "./login/login";
import MainMerchantDashboard from "./merchant-dashboard";
import MerchantDetail from "./merchant-detail";
import MerchantSettingPage from "./merchant-setting";
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
        <Route path='/merchant-setting' element={<MerchantSettingPage />} />
        <Route path='/merchant-dashboard' element={<MainMerchantDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Pages;


