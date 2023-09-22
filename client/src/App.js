import Login from "./components/Login";
import OutcomePage from "./components/OutcomePage";
import { OtpContext } from "./context/OTPContext";
import VerificationPage from "./components/VerificationPage";
import { useOTP } from "./hooks/otp-hook";
import { Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const { otp, setOTPValue, getOTP, phoneNumber, addPhoneNumber } = useOTP();
  return (
    <div>
      <OtpContext.Provider
        value={{
          otp,
          setOTPValue,
          getOTP,
          phoneNumber,
          addPhoneNumber
        }}
      >
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/verification" element={<VerificationPage />} />
          <Route exact path="/verified" element={<OutcomePage />} />
        </Routes>
        <ToastContainer />
      </OtpContext.Provider>
      {/* <Login/>
      <VerificationPage/>
      <OutcomePage/> */}
    </div>
  );
}

export default App;
