import { Link } from "react-router";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Navigation Links */}
        <nav className="flex gap-x-6 mb-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/features" className="hover:text-gray-400">Features</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </nav>

        {/* Copyright & Social Links */}
        <div className="text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="flex gap-x-4 justify-center mt-3">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              Twitter
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              Facebook
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
