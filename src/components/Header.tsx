import React, { useState } from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-sage shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="SMG Dev Logo"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-sm"
          />
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="text-lg sm:text-xl md:text-2xl font-bold cursor-pointer text-brunswick-green"
          >
            smg-dev
          </Link>
        </div>
        <nav className={`md:block ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 absolute md:relative left-0 right-0 md:left-auto md:right-auto top-full md:top-auto bg-sage md:bg-transparent shadow-md md:shadow-none">
            {["about", "skills", "projects", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="block py-2 px-4 md:px-0 md:py-0 hover:text-fern-green cursor-pointer transition-colors duration-350 capitalize"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="md:hidden p-2 rounded-md hover:bg-fern-green hover:bg-opacity-20 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;