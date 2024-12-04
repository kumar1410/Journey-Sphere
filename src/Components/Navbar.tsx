import { Search, User, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute z-50 w-screen h-16 flex items-center px-4 md:px-10 lg:px-[61px] bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <a href="#home">
          <img src="src/assets/Nav-Logo.png" alt="Logo" className="" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="font-serif flex gap-[65px] text-white text-sm">
          <li>
            <a href="#menu" className="hover:text-gray-900">
              HOME
            </a>
          </li>
          <li>
            <a href="#events" className="hover:text-gray-900">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-gray-900">
              TICKET
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-900">
              GALLERY
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-900">
              CONTACT US
            </a>
          </li>
        </ul>
      </div>

      {/* Search and User Icons */}
      <div className="hidden md:flex gap-[15px]">
        <Search color="white" />
        <User color="white" />
      </div>

      {/* Hamburger Menu Icon */}
      <div className="flex md:hidden ml-auto">
        <button onClick={toggleMenu} className="focus:outline-none">
          {isMenuOpen ? (
            <X color="white" size={24} />
          ) : (
            <Menu color="white" size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-4 md:hidden">
          <ul className="flex flex-col items-center space-y-4 font-serif text-sm">
            <li>
              <a href="#menu" className="hover:text-gray-900">
                HOME
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-gray-900">
                ABOUT US
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-gray-900">
                TICKET
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-900">
                GALLERY
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-900">
                CONTACT US
              </a>
            </li>
          </ul>
          <div className="flex gap-[15px]">
            <Search color="white" />
            <User color="white" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
