import { useState } from 'react';

const ForgotPassword: React.FC = () => {
 const [email, setEmail] = useState('');

 const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  // Handle forgot password logic here
 };

 return (
  <div>
   <h1>Forgot Password</h1>
   <form onSubmit={handleSubmit}>
    <label htmlFor="email">Email:</label>
    <input
     type="email"
     id="email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     required
    />
    <button type="submit">Submit</button>
   </form>
  </div>
 );
};

export default ForgotPassword;