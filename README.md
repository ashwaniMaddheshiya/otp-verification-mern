# otp-verification-mern

## Description
This is a simple OTP (One-Time Password) verification app built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to enter their phone number, receive an OTP, and verify it to gain access.

## Features
 - User-friendly phone number input with country code selection.
 - Automatic OTP generation and SMS delivery (for demonstration purposes, no real SMS service is used).
 - OTP verification with a user-entered OTP.
 - Context API for state management.
 - Responsive and Stylish UI using Tailwind CSS.

## Technologies
### Frontend:

 - React.js
 - React Router for navigation
 - State management with Context Api
 - Axios for API requests
 - Tailwind CSS for styling
 - React Phone Input 2

### Backend:

 - Node.js
 - Express.js
 - OTP Generator (for generating OTPs)

## Installation
1) Clone the repository
  ```bash
  git clone https://github.com/ashwaniMaddheshiya/otp-verification-mern.git
  ```

2) Install dependencies for both the frontend and backend:
  ```bash
  cd client
  npm install
  cd ../server
  npm install
  ```

3) Start the development servers:
  ```bash
  // Frontend
  cd client
  npm start
  
  //Backend
  cd server
  npm start
  ```

5) Open your web browser and navigate to http://localhost:3000 to access the application.

## Usage
 - Enter your phone number with the country code (e.g., +91 for India).
 - Click the "Sign In with OTP" button.
 - You will receive a mock OTP on the frontend (no real SMS service used).
 - Enter the OTP in the input field and click "Verify OTP."

![IndexPage](https://github.com/ashwaniMaddheshiya/otp-verification-mern/assets/98683284/04971fa5-56b7-41b1-ab83-642d27b8fd39)
![VerificationPage](https://github.com/ashwaniMaddheshiya/otp-verification-mern/assets/98683284/72752f34-51b5-46c3-811b-150ba3472a10)
![WelcomePage](https://github.com/ashwaniMaddheshiya/otp-verification-mern/assets/98683284/deafb29e-c135-4c0c-aa9d-cd8b0fbad43b)

https://github.com/ashwaniMaddheshiya/otp-verification-mern/assets/98683284/5a1663a2-36c2-4877-9216-bd48fc39e2ba




