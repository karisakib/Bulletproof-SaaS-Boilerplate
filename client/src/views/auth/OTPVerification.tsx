const OTPVerification: React.FC = () => {
 return (
  <div>
   <h1>OTP Verification</h1>
   <form>
    <label htmlFor="otp">Enter OTP:</label>
    <input type="text" id="otp" name="otp" />
    <button type="submit">Verify</button>
   </form>
  </div>
 );
};

export default OTPVerification;