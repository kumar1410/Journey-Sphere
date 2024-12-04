const Footer = () => {
  return (
    <footer className="relative w-full h-80">
      {/* Background Gradient */}
      <div className="absolute w-full h-[200px] -top-10 bg-book-now-up-grad -rotate-3"></div>
      {/* Background Image */}
      <img
        src="src/assets/Footer-BG.png"
        alt=""
        className="w-full h-full object-cover"
      />
      {/* Footer Content */}
      <div className="absolute w-screen flex flex-col md:flex-row items-center justify-between bottom-[58.5px] px-6 md:px-[161px] space-y-4 md:space-y-0">
        {/* Logo */}
        <div className="flex pl-9 md:pl-0 md:justify-start">
          <a href="#home">
            <img
              src="src/assets/Nav-Logo.png"
              alt="Logo"
              className="w-40 md:w-auto"
            />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="md:pl-[142px]">
          <ul className="font-serif flex flex-col md:flex-row gap-4 md:gap-[29px] text-white text-sm items-center">
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

        {/* Social Media Icons */}
        <div className="flex gap-4 justify-center md:pl-[142px]">
          <img
            src="src/assets/facebook.png"
            alt="Facebook"
            className="w-6 md:w-auto"
          />
          <img
            src="src/assets/Instagram.png"
            alt="Instagram"
            className="w-6 md:w-auto"
          />
          <img
            src="src/assets/Youtube.png"
            alt="YouTube"
            className="w-6 md:w-auto"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
