import React from "react";
import logo from "../welcome.png";

const OutcomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-10">
        <img src={logo} alt="Logo" className="h-48 w-48" />
      </div>

      <div className="flex flex-col justify-center items-center mt-12">
        <div className="text-xl font-medium text-gray-900">
          Welcome to AdmitKard
        </div>
        <div className="flex flex-col justify-center items-center mt-6">
          <span className="text-gray-600 font-medium text-sm text-center">
            In Order to provide you with <br /> a custom experience,
          </span>
          <span className="text-gray-700 font-medium">
            we need to ask you a few questions.
          </span>
        </div>
      </div>

      <div className="mt-20">
        <button class="bg-orange-400 hover:bg-orange-500 text-white py-1 px-12 rounded-full">
          Get Started
        </button>
        <div className="text-gray-500 text-center text-sm">*This will only take 5 min.</div>
      </div>
    </div>
  );
};

export default OutcomePage;
