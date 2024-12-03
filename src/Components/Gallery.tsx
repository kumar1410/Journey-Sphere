const Gallery = () => {
  return (
    <section className="w-full h-screen bg-black pt-10">
      <div className="pt-14">
        <h1 className="uppercase text-[#DDB543] text-center text-4xl font-league font-bold">
          the wonder of nature
        </h1>
        <p className="text-[#C6C6C6] text-center text-xl font-thin font-montserrat pt-3">
          We seek to provide the authetic content for traveller around the world
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-16 md:px-16 px-4  justify-center items-center pt-12 ">
        <div className="relative w-[140px] md:w-[272px] h-[150px] md:h-[440px] rounded-2xl group overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:translate-y-[4%]">
          <img
            src="../../public/assets/Australlia.png"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-hover:translate-y-[-10%] rounded-2xl"
          />

          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-[#BDBDBD] absolute bottom-6 md:bottom-12 left-3 md:left-[70px] font-thin text-sm md:text-lg font-league transition-opacity duration-500 group-hover:opacity-100">
            Great Barrier Reef
          </p>
          <h1 className="absolute text-[#D6D6D6] bottom-0 md:bottom-5 left-8 md:left-20 font-semibold text-lg md:text-3xl font-league transition-opacity duration-500 group-hover:opacity-100">
            Australia
          </h1>
        </div>
        <div className="relative w-[140px] md:w-[272px] h-[150px] md:h-[440px] rounded-2xl group overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:translate-y-[4%]">
          <img
            src="../../public/assets/Zimbabwe.png"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-hover:translate-y-[-10%] rounded-2xl"
          />

          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-[#BDBDBD] absolute bottom-6 md:bottom-12 left-7 md:left-[80px] font-thin text-sm md:text-lg font-league transition-opacity duration-500 group-hover:opacity-100">
            Victoria Falls
          </p>
          <h1 className="absolute text-[#D6D6D6] bottom-0 md:bottom-5 left-6 md:left-16 font-semibold text-lg md:text-3xl font-league transition-opacity duration-500 group-hover:opacity-100">
            Zimbabwe
          </h1>
        </div>
        <div className="relative w-[140px] md:w-[272px] h-[150px] md:h-[440px] rounded-2xl group overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:translate-y-[4%]">
          <img
            src="../../public/assets/Nepal.png"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-hover:translate-y-[-10%] rounded-2xl"
          />

          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-[#BDBDBD] absolute bottom-6 md:bottom-12 left-8 md:left-[80px] font-thin text-sm md:text-lg font-league transition-opacity duration-500 group-hover:opacity-100">
            Mount Everest
          </p>
          <h1 className="absolute text-[#D6D6D6] bottom-0 md:bottom-5 left-12 md:left-24 font-semibold text-lg md:text-3xl font-league transition-opacity duration-500 group-hover:opacity-100">
            Nepal
          </h1>
        </div>
        <div className="relative w-[140px] md:w-[272px] h-[150px] md:h-[440px] rounded-2xl group overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:translate-y-[4%]">
          {/* Image */}
          <img
            src="../../public/assets/South America.png"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-hover:translate-y-[-10%] rounded-2xl"
          />

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-[#BDBDBD] absolute bottom-6 md:bottom-12 left-3 md:left-[70px] font-thin text-sm md:text-lg font-league transition-opacity duration-500 group-hover:opacity-100">
            Amazon Rainforest
          </p>
          <h1 className="absolute text-[#D6D6D6] bottom-0 left-2 md:bottom-5 md:left-16 font-semibold text-lg md:text-2xl font-league transition-opacity duration-500 group-hover:opacity-100">
            South America
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
