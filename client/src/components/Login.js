import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../company-logo.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { OtpContext } from "../context/OTPContext";
import { toast } from "react-toastify";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const otp = useContext(OtpContext);
  const navigate = useNavigate();

  const handlePhoneNumberChange = (value) => {
    setPhoneNumber(value);
  };

  const isValidPhoneNumber = (phoneNumber) => {
    const phonePattern = /^91[0-9]{10}$/; 

    return phonePattern.test(phoneNumber);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidPhoneNumber(phoneNumber)) {
      toast.error("Please enter valid phone number", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      return;
    }

    try {
      otp.addPhoneNumber(phoneNumber);
      otp.getOTP();
      navigate("/verification");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="my-10">
        <img src={logo} alt="Logo" className="h-12 w-55" />
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <span className="text-xl">Welcome Back</span>
        <span className="my-3 text-gray-500 text-sm font-medium">
          Please Sign in to your account
        </span>
      </div>

      <div className="mt-8">
        <div className="relative mt-3 ">
          <PhoneInput
            country={"in"} // Set your default country here
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            containerClass="mt-2"
          />
          <label
            htmlFor="number"
            className="absolute top-0 left-5 -mt-2 px-1 text-gray-600 font-medium  text-[10px] "
          >
            Enter Contact Number
          </label>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center font-medium text-[11px] text-gray-600 mt-8">
        <p>We will send you a one time SMS message.</p>
        <p>Charges may apply.</p>
      </div>
      <div className="mt-20">
        <button
          class="bg-orange-400 hover:bg-orange-500 text-white py-1 px-12 rounded-full"
          onClick={handleSubmit}
        >
          Sign In with OTP
        </button>
      </div>
    </div>
  );
};

export default Login;
