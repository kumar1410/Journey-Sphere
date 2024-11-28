const Footer = () => {
  return (
    <footer className="relative w-full h-80 ">
      <div className="absolute w-full h-[200px] -top-10 bg-book-now-up-grad -rotate-3"></div>
      <img
        src="../src/assets/Footer-BG.png"
        alt=""
        className="w-full h-full object-cover "
      />
      {/* <div className="relative w-full h-80">
        <div className="w-full border-1 -top-14 absolute h-80 bg-custom-gradient blur-lg -rotate-2"></div>
        <img src="../src/assets/footer.png" alt="" className="w-full h-full object-cover"/>
      </div> */}
      <div className="absolute w-screen items-center flex bottom-[58.5px] px-[161px]">
        <div className="flex  space-x-2 justify-between">
          <a href="#home">
            <img src="../src/assets/Nav-Logo.png" alt="Logo" className="" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="pl-[142px]">
          <ul className=" font-serif flex gap-[29px] text-white text-sm">
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

        <div className=" flex pl-[142px] gap-[24px]">
          <img src="../src/assets/facebook.png" alt="" />
          <img src="../src/assets/Instagram.png" alt="" />
          <img src="../src/assets/Youtube.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
