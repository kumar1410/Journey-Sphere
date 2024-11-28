import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface SlideConst {
  id: number;
  url: string;
  title: string;
  desc: string;
}

const Slides: SlideConst[] = [
  {
    id: 0,
    url: "../../src/assets/Indonesia.png",
    title: "Indonesia",
    desc: "Explore Indonesia, a stunning archipelago of 17,000+ islands where natural beauty and cultural diversity blend seamlessly. From lush jungles to serene beaches, it's a destination of unforgettable adventures and tranquility.",
  },
  {
    id: 1,
    url: "../../src/assets/Africa.png",
    title: "Africa",
    desc: "Discover South Africa's breathtaking landscapes and vibrant culture, from Table Mountain to the wildlife of Kruger National Park. An unforgettable adventure awaits every traveler!",
  },
  {
    id: 2,
    url: "../../src/assets/Arizona.png",
    title: "Arizona",
    desc: "a natural wonder carved by the Colorado River, offering breathtaking views and unforgettable hikes. Explore its vast landscapes, perfect for adventure and nature lovers alike.",
  },
  {
    id: 3,
    url: "../../src/assets/Brazil.png",
    title: "brazil",
    desc: "Discover the vibrant energy of Brazil, where lush rainforests, stunning beaches, and iconic landmarks like Christ the Redeemer await. Experience a thrilling blend of culture, nature, and adventure!",
  },
  {
    id: 4,
    url: "../../src/assets/Egypt.png",
    title: "Egypt",
    desc: "Explore the timeless wonders of Egypt, home to the iconic pyramids, ancient temples, and the majestic Nile River. Immerse yourself in the rich history and vibrant culture of this land of pharaohs and legends.",
  },
  {
    id: 5,
    url: "../../src/assets/kashmir.png",
    title: "Kashmir",
    desc: `Experience the breathtaking beauty of Kashmir, often called "Paradise on Earth." With its stunning landscapes, lush valleys, and serene lakes, Kashmir offers a perfect blend of natural wonder and rich culture.`,
  },
  // {
  //   id: 6,
  //   url: "../../src/assets/Africa.png",
  //   title:"",
  //   desc:""
  // },
  // {
  //   id: 7,
  //   url: "../../src/assets/Arizona.png",
  //   title:"",
  //   desc:""
  // },
  // {
  //   id: 8,
  //   url: "../../src/assets/Brazil.png",
  //   title:"",
  //   desc:""
  // },
  // {
  //   id: 9,
  //   url: "../../src/assets/Egypt.png",
  //   title:"",
  //   desc:""
  // },
];

const HeroSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef: any = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImage, setCurrentImage] = useState(Slides[0]?.url);
  const [previousImage, setPreviousImage] = useState(Slides[0]?.url);
  const [animation, setAnimation] = useState("animate-slideIn");
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const updateIndex = useCallback(() => {
    if (animating) return;
    setAnimating(true);
    setAnimation("animate-slideOut");
    setTimeout(() => {
      setAnimation("animate-slideIn");
      setAnimating(false);
      setCurrentSlide(swiperRef?.current?.swiper?.realIndex);
    }, 500);
    const progressPercentage =
      ((swiperRef?.current?.swiper?.realIndex % Slides.length) / (Slides.length - 1)) * 100;
      console.log(swiperRef?.current?.swiper?.realIndex, swiperRef?.current?.swiper?.realIndex % Slides.length, "progress", progressPercentage);
    setProgress(progressPercentage);
  }, []);

  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    const swiperInstance = swiperRef?.current?.swiper;

    if (swiperInstance) {
      swiperInstance.on("slideChange", updateIndex);
    }

    const getImageSrc = (id: number) => {
      const index: number = Slides.findIndex((slide) => slide.id === id);
      setCurrentImage(Slides[index]?.url);
    };
    getImageSrc(currentSlide);
    if (currentImage) {
      setPreviousImage(currentImage);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off("slideChange", updateIndex);
      }
    };
  }, [currentImage, updateIndex, currentSlide]);

  return (
    <section className="relative h-screen w-full bg-black overflow-x-hidden">
      {/* Background Images */}
      <div className="absolute h-screen w-full opacity-70">
        {previousImage && (
          <motion.img
            key={`previous-${previousImage}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            src={previousImage}
            alt=""
            className="absolute w-full h-full opacity-50"
            style={{ zIndex: 0, objectFit: "cover" }}
          />
        )}
        <motion.img
          key={`current-${currentImage}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          src={currentImage}
          alt=""
          className="absolute w-full h-full opacity-50"
          style={{ zIndex: 1, objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-wrap border-2 border-red-800">
        {/* Left Description Content */}
        <div
          className="absolute h-1/2 w-1/2 left-16 bottom-4"
          style={{ zIndex: 1 }}
        >
          <div
            className={`absolute ${animation} flex flex-col items-start`}
            key={currentSlide}
          >
            <div
              className="absolute"
              style={{
                width: "100px",
                height: "2px",
                backgroundColor: "#ddb443",
                marginLeft: "7px",
                marginBottom: "15px",
              }}
            ></div>
            <div className="" style={{ width: "70%" }}>
              <h1 className="uppercase text-8xl font-league font-bold text-[#FEFEFE]">
                {Slides[currentSlide].title}
              </h1>
              <p
                className="text-wrap text-xl font-montserrat font-thin"
                style={{ color: "#FFFFFF" }}
              >
                {Slides[currentSlide].desc}.
              </p>
              <button
                className="capitalize font-montserrat rounded-full h-10 w-32 mt-6"
                style={{ backgroundColor: "#FFFFFF33" }}
              >
                Explore
              </button>
            </div>
          </div>
        </div>
        {/* Swiper Slider */}
        <div className=" absolute bottom-4 left-[50%] w-[65%] h-1/2 overflow-x-hidden">
          <Swiper
            slidesPerView={4}
            spaceBetween={-100}
            speed={800}
            loop={true}
            effect={"fade"}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            pagination={{
              el: ".custom-pagination",
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            style={{ height: "100%" }}
            ref={swiperRef}
          >
            {Slides.map((Slides, index) => (
              <SwiperSlide key={index}>
                <img
                  src={Slides.url}
                  alt=""
                  className={`transition-transform duration-700 transform hover:scale-105 object-cover rounded-lg w-44 h-56`}
                  style={{
                    animation: "zoomOut 800ms ease-in-out",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          {/* <div className="custom-prev">❮</div>
          <div className="custom-next">❯</div> */}

          {/* Custom Pagination */}
          {/* <div className="custom-pagination"></div> */}
        </div>
        {/* Navigation Buttons */}
        <div
          className="absolute flex justify-between bottom-16 left-[50%] gap-6"
          style={{ zIndex: 1 }}
        >
          <div className="text-white text-3xl custom-prev cursor-pointer">
            <img src="../../src/assets/left.svg" alt="" />
          </div>
          <div className="text-white text-3xl custom-next cursor-pointer">
            <img src="../../src/assets/right.svg" alt="" />
          </div>
        </div>
        {/* Progress Bar */}
        <div className="absolute flex bottom-[85px] w-[460px] right-36 bg-[#FFFFFF80] h-2 rounded-full overflow-hidden" style={{ zIndex: 1 }}>
            <div
              className="bg-[#FBC21E] h-full transition-all duration-500 "
              style={{ width: `${progress}%` }}
            ></div>
          </div>
            <div className="absolute font-gothic text-5xl bottom-[55px] right-24 h-14 w-7 text-[#FFFFFF]" style={{ zIndex: 1 }}>0{currentSlide + 1}</div>
      </div>
    </section>
  );
};

export default HeroSection;
