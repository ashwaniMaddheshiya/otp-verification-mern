import { useState } from "react";
import axios from "axios";

export const useOTP = () => {
  const [otp, setOtp] = useState();
  const[phoneNumber,setPhoneNumber] = useState();

  const addPhoneNumber = (value) => {
    setPhoneNumber(value);
  }

  const getOTP = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/login/generate-otp"
    );
    const data = await response.data;
    // console.log(data);
    setOTPValue(data);
  };

  const setOTPValue = (value) => {
    setOtp(value);
    console.log(value);
  };

  return { otp, setOTPValue, getOTP, addPhoneNumber, phoneNumber };
};
