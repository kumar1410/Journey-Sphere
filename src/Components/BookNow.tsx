const BookNow = () => {
  return (
    <>
      <div className="relative flex flex-col md:flex-row h-auto md:h-[610px] w-full ">
        <img
          src="src/assets/bookNow.png"
          alt=""
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute w-full h-[200px] -top-28 blur-3xl bg-book-now-up-grad rotate-180"></div>

        {/* Text Section */}
        <div className="text-white w-full md:w-1/2 mt-32 px-8 md:px-28 z-0">
          <h1 className="font-league text-[#F4BE23] font-bold uppercase text-2xl md:text-4xl lg:text-6xl">
            Here’s Makes a vacation perfect for you!
          </h1>
          <p className="text-sm md:text-lg text-[#DFDFDF] font-montserrat font-thin mt-4">
            Whether you're planning a family vacation with your pet,
            <span className="w-full block">
              {" "}
              a relaxing weekend escape, or an adventurous trip,
            </span>
            <span className="w-full block">
              vacation rentals offer the perfect fit for any travel style.
            </span>
            <span className="w-full block">
              From cozy mountain cabins to scenic lakeside lodges,
            </span>
            <span className="w-full block">
              {" "}
              you’ll find the ideal spot to create unforgettable memories.
            </span>
          </p>
          <button className="capitalize bg-[#ffffff15] rounded-full h-10 w-32 mt-6">
            book now
          </button>
        </div>

        {/* Image Thumbnails */}
        <div className=" pt-12 md:pt-28 z-10 grid grid-cols-2 grid-rows-2 justify-items-center items-center gap-4 pl-5 md:pl-44">
          <img
            src="src/assets/Property 1=Component 29.png"
            className="w-40 h-40 md:h-44 md:w-44 object-cover"
          />
          <img
            src="src/assets/Property 1=Component 29.png"
            className="w-40 h-40 md:h-44 md:w-44 object-cover"
          />
          <img
            src="src/assets/Property 1=Component 29.png"
            className="w-40 h-40 md:h-44 md:w-44 object-cover col-span-2 justify-self-center"
          />
        </div>

        <div className="absolute w-full h-[305px] bg-book-now-up-grad"></div>
        <div className="absolute w-full -bottom-[400px] blur-lg h-[450px] bg-book-now-up-grad"></div>
      </div>

      {/* What We Offer Section */}
      <div className="bg-black w-full h-auto md:h-[600px]">
        <div>
          <h1 className="text-[#DDB543] uppercase text-center pt-12 md:pt-20 text-2xl md:text-3xl font-league font-bold">
            What We Offer
          </h1>
          <p className="text-[#C6C6C6] text-center pt-3 md:pt-5 text-sm md:text-base font-montserrat font-thin">
            Tailored travel experiences for every explorer.
          </p>
        </div>
        <div className="flex flex-col md:flex-row px-8 md:px-60 justify-between pt-8 md:pt-16 gap-10 md:gap-0">
          {/* Destination Inspiration */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/destinationInspiration.svg"
              alt=""
              className="h-16 w-16 md:h-20 md:w-20"
            />
            <h1 className="text-white text-center pt-5 md:pt-9 text-lg md:text-xl font-league font-bold">
              Destination Inspiration
            </h1>
            <p className="text-white text-center font-thin font-montserrat text-xs md:text-sm pt-2">
              Discover unique spots, from{" "}
              <span className="w-full block">
                famous landmarks to hidden gems.
              </span>
            </p>
          </div>

          {/* Custom Itineraries */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/customItenaries.svg"
              alt=""
              className="h-16 w-16 md:h-20 md:w-20"
            />
            <h1 className="text-white text-center pt-5 md:pt-9 text-lg md:text-xl font-league font-bold">
              Custom Itineraries
            </h1>
            <p className="text-white text-center font-thin font-montserrat text-xs md:text-sm pt-2">
              Create personalized travel plans to{" "}
              <span className="w-full block text-center">
                match your interests.
              </span>
            </p>
          </div>

          {/* Stress-Free Travel */}
          <div className="flex flex-col items-center">
            <img
              src="src/assets/stressFreeTravel.svg"
              alt=""
              className="h-16 w-16 md:h-20 md:w-20"
            />
            <h1 className="text-white text-center pt-5 md:pt-9 text-lg md:text-xl font-league font-bold">
              Stress-Free Travel
            </h1>
            <p className="text-white text-center font-thin font-montserrat text-xs md:text-sm pt-2">
              Expert tips and resources for a{" "}
              <span className="w-full block text-center">
                smooth, hassle-free journey.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookNow;
