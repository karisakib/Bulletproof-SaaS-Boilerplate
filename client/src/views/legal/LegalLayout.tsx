// import { Outlet } from "react-router";

const LegalLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
 return (
  <div>
   <header>
    <h1>Legal Information</h1>
   </header>
   <main>{children}</main>
   <footer>
    <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
   </footer>
  </div>
 );
};

export default LegalLayout;
