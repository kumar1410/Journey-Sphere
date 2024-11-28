// import VideoThumbnail from "./VideoThumbnail";

const BookNow = () => {
  return (
    <>
      <div className="relative flex h-[610px] w-full ">
        {/* <div className="absolute h-[610px] w-full ">
          <div className="absolute w-full h-full -top-0 bg-book-now-up-grad"></div>
          <img
            src="../src/assets/raw-book-now.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute w-full h-full -bottom-5 bg-book-now-up-grad rotate-180"></div>
        </div> */}
        <img
          src="../src/assets/bookNow.png"
          alt=""
          className="absolute h-full w-full object-cover "
        />
        <div className="absolute w-full h-[200px] -top-28 blur-3xl bg-book-now-up-grad rotate-180"></div>
        <div className="text-white w-1/2 mt-32 ml-28 z-0">
          <h1 className="font-league text-[#F4BE23] font-bold uppercase text-6xl">
            Here’s Makes a vacation perfect for you!
          </h1>
          <p className="text-lg text-[#DFDFDF] font-montserrat font-thin">
            Whether you're planning a family vacation with your pet,
            <span className="w-full block">
              {" "}
              a relaxing weekend escape,or an adventurous trip,
            </span>
            <span className="w-full block">
              {" "}
              vacation rentals offer the perfect fit for any travel style.
            </span>{" "}
            <span className="w-full block">
              {" "}
              From cozy mountain cabins to scenic lakeside lodges,
            </span>{" "}
            <span className="w-full block">
              {" "}
              you’ll find the ideal spot to create
            </span>{" "}
            unforgettable memories.
          </p>
          <button className="capitalize bg-[#ffffff15] rounded-full h-10 w-32 mt-6">
            book now
          </button>
        </div>
        <div className="text-white w-1/2 z-0">
          {/* <div className="flex flex-row justify-items-center min-h-screen">
          <VideoThumbnail
              thumbnail="../../src/assets/Property 1=Component 29.png"
              videoUrl="https://www.youtube.com/embed/j7GG009J9uc?si=3wjb8a40RO5KTu1m"
            />
            <VideoThumbnail
              thumbnail="../../src/assets/Property 1=Component 29.png"
              videoUrl="https://www.youtube.com/embed/j7GG009J9uc?si=3wjb8a40RO5KTu1m"
            />
            <VideoThumbnail
              thumbnail="../../src/assets/Property 1=Component 29.png"
              videoUrl="https://www.youtube.com/embed/j7GG009J9uc?si=3wjb8a40RO5KTu1m"
            />
          </div> */}
          <div className=" pt-28 flex flex-wrap flex-row-reverse justify-center items-center">
            <img src="../../src/assets/Property 1=Component 29.png" />
            <img src="../../src/assets/Property 1=Component 29.png" />
            <img src="../../src/assets/Property 1=Component 29.png" />
          </div>
        </div>
      <div className="absolute w-full h-[305px] bg-book-now-up-grad "></div>
      <div className="absolute w-full -bottom-[400px] blur-lg h-[450px] bg-book-now-up-grad "></div>
      </div>
      <div className=" bg-black w-full h-[600px]">
        <div>
          <h1 className="text-[#DDB543] uppercase text-center pt-20 text-3xl font-league font-bold">
            What We Offer
          </h1>
          <p className="text-[#C6C6C6] text-center pt-5 font-montserrat font-thin">
            Tailored travel experiences for every explorer.
          </p>
        </div>
        <div className="flex px-60 justify-between pt-16">
          <div className="flex flex-col items-center">
            <img
              src="../src/assets/destinationInspiration.svg"
              alt=""
              className="h-20 w-20"
            />
            <h1 className="text-white text-center pt-9 text-xl font-league font-bold">
              Destination Inspiration
            </h1>
            <p className="text-white text-center font-thin font-montserrat text-sm pt-2">
              Discover unique spots, from{" "}
              <span className="w-full block">famous landmarks to hidden</span>
              <span className="w-full block text-center"> gems.</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="../src/assets/customItenaries.svg"
              alt=""
              className="h-20 w-20"
            />
            <h1 className="text-white text-center pt-9 text-xl font-league font-bold">
              Custom Itineraries
            </h1>
            <p className="text-white text-center font-thin font-montserrat text-sm pt-2">
              Create personalized travel plans to{" "}
              <span className="w-full block text-center">
                {" "}
                match your interests.
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="../src/assets/stressFreeTravel.svg"
              alt=""
              className="h-20 w-20"
            />
            <h1 className="text-white text-center pt-9 text-xl font-league font-bold">
              Stress-Free Travel
            </h1>
            <p className="text-white text-center font-thin font-montserrat text-sm pt-2">
              Expert tips and resources for a{" "}
              <span className="w-full block text-center">
                {" "}
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
