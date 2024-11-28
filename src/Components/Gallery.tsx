

const Gallery = () => {
  return (
    <section className="w-full h-[700px] bg-black pt-10">
      <div className="pt-14">
        <h1 className="uppercase text-[#DDB543] text-center text-4xl font-league font-bold">
          the wonder of nature
        </h1>
        <p className="text-[#C6C6C6] text-center text-xl font-thin font-montserrat pt-3">
          We seek to provide the authetic content for traveller around the world
        </p>
      </div>

      <div className="flex px-16  justify-between pt-12 ">
        <div className="relative w-[272px] h-[440px] rounded-2xl group overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:translate-y-[4%]">
          <img
            src="../src/assets/Australlia.png"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-hover:translate-y-[-10%] rounded-2xl"
          />

          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-[#BDBDBD] absolute bottom-12 left-[70px] font-thin text-lg font-league transition-opacity duration-500 group-hover:opacity-100">
            Great Barrier Reef
          </p>
          <h1 className="absolute text-[#D6D6D6] bottom-5 left-20 font-semibold text-3xl font-league transition-opacity duration-500 group-hover:opacity-100">
            Australia
          </h1>
        </div>
        <div className="relative w-[272px] h-[440px] rounded-2xl group overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:translate-y-[4%]">
          <img
            src="../src/assets/Zimbabwe.png"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-hover:translate-y-[-10%] rounded-2xl"
          />

          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-[#BDBDBD] absolute bottom-12 left-[80px] font-thin text-lg font-league transition-opacity duration-500 group-hover:opacity-100">
            Victoria Falls
          </p>
          <h1 className="absolute text-[#D6D6D6] bottom-5 left-16 font-semibold text-3xl font-league transition-opacity duration-500 group-hover:opacity-100">
            Zimbabwe
          </h1>
        </div>
        <div className="relative w-[272px] h-[440px] rounded-2xl group overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:translate-y-[4%]">
          <img
            src="../src/assets/Nepal.png"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-hover:translate-y-[-10%] rounded-2xl"
          />

          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-[#BDBDBD] absolute bottom-12 left-[80px] font-thin text-lg font-league transition-opacity duration-500 group-hover:opacity-100">
            Mount Everest
          </p>
          <h1 className="absolute text-[#D6D6D6] bottom-5 left-24 font-semibold text-3xl font-league transition-opacity duration-500 group-hover:opacity-100">
            Nepal
          </h1>
        </div>
        <div className="relative w-[272px] h-[440px] rounded-2xl group overflow-hidden transition-transform duration-500 hover:scale-[1.05] hover:translate-y-[4%]">
          {/* Image */}
          <img
            src="../src/assets/South America.png"
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-125 group-hover:translate-y-[-10%] rounded-2xl"
          />

          {/* Bottom Content */}
          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <p className="text-[#BDBDBD] absolute bottom-12 left-[70px] font-thin text-lg font-league transition-opacity duration-500 group-hover:opacity-100">
            Amazon Rainforest
          </p>
          <h1 className="absolute text-[#D6D6D6] bottom-5 left-16 font-semibold text-2xl font-league transition-opacity duration-500 group-hover:opacity-100">
            South America
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
