import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./admin";
import AdminClaimDashboard from "./admin-claim";
import Dashboard from "./homepage/dashboard";
import Login from "./login/login";
import MainMerchantDashboard from "./merchant-dashboard";
import MerchantDetail from "./merchant-detail";
import MerchantSettingPage from "./merchant-setting";
import MerchantDashboard from "./merchant/dashboard";
import ErrorPage from "./page404";
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
        <Route path='/admin-claim' element={<AdminClaimDashboard />} />
        <Route path='/page404' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default Pages;


