import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-sage shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold cursor-pointer text-brunswick-green"
        >
          smg-dev
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-fern-green cursor-pointer transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="hover:text-fern-green cursor-pointer transition-colors duration-300"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="hover:text-fern-green cursor-pointer transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-fern-green cursor-pointer transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
