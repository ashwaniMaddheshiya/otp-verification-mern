import { createContext } from "react";

export const OtpContext = createContext({
  otp: null,
  phoneNumber: null,
  addPhoneNumber: (value) => {},
  getOTP: () => {},
});
