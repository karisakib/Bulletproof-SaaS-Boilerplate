import React from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
 return (
  <nav className="flex justify-center items-center py-4 bg-white shadow-md">
   <div className="flex gap-x-6">
    <Link to="/" className="text-gray-800 hover:text-blue-600">
     Home
    </Link>
    <Link to="/about" className="text-gray-800 hover:text-blue-600">
     About
    </Link>
    <Link to="/features" className="text-gray-800 hover:text-blue-600">
     Features
    </Link>
    <Link to="/contact" className="text-gray-800 hover:text-blue-600">
     Contact
    </Link>
   </div>
  </nav>
 );
};

export default Navbar;
