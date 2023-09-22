import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../verify-logo.png";
import OTPInput from "otp-input-react";
import { OtpContext } from "../context/OTPContext";

const VerificationPage = () => {
  const [OTP, setOTP] = useState();
  const otpHook = useContext(OtpContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (otpHook.otp) {
      // Check if OTP is available
      toast.success("Your Otp is " + otpHook.otp.otp, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  }, [otpHook.otp]);

  const handleResendClick = () => {
    try {
      otpHook.getOTP();
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/api/login/verify-otp",
        {
          userOTP: OTP,
          generatedOTP: otpHook.otp,
        }
      );

      const data = await response.data;
      console.log(data);
      navigate("/verified");
    } catch (err) {
      // console.log(err);
      toast.error("Please try again", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000, // Close the notification after 2 seconds
      });
    }
  };

  return (
    // <div>
    <div className="flex flex-col justify-center items-center">
      <div className="my-10">
        <img src={logo} alt="Logo" className="h-20 w-40" />
      </div>
      <div className="mt-2 flex flex-col justify-center items-center">
        <p className="text-gray-900">Please verify your mobile number</p>
        <p className="text-sm text-gray-500  mt-5">
          An OTP is sent to <span className="text-gray-800 font-medium">+{otpHook.phoneNumber}</span>
        </p>
        <Link to="/">
          <p className="text-xs text-orange-500 underline mt-2">
            Change Phone Number
          </p>
        </Link>
      </div>

      <div className="mt-16">
        <div>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            inputClassName="w-10 h-10 text-center mx-2 border focus:outline-none shadow-lg"
          />
        </div>
        <div className="text-sm flex mt-16">
          <span className="text-gray-600 font-medium">
            Didn't receive the code?{" "}
          </span>
          <span
            className="text-orange-500 hover:underline cursor-pointer ml-6"
            onClick={handleResendClick}
          >
            Resend
          </span>
        </div>
      </div>
      <div className="mt-8">
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

export default VerificationPage;
