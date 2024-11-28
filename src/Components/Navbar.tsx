import { Search, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="absolute z-50 flex w-screen h-16 items-center  md:px-10  lg:px-[61px] py-[30px] bg-transparent">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <a href="#home">
          <img src="../src/assets/Nav-Logo.png" alt="Logo" className="" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="pl-[30%]">
        <ul className=" font-serif flex gap-[65px] text-white text-sm">
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

      <div className=" flex pl-[3%] gap-[15px]">
        <Search color="white" />
        <User color="white" />
      </div>
    </nav>
  );
};

export default Navbar;
