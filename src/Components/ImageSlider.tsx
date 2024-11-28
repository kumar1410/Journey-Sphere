// import React, { useState, useEffect } from 'react';


// const slides = [
//   {
//     id: 1,
//     title: "INDONESIA",
//     description: "Explore Indonesia, a stunning archipelago of 17,000+ islands...",
//     image: "../../src/assets/Footer-BG.png",
//     thumbnails: ["/path-to-thumb1.jpg", "/path-to-thumb2.jpg"],
//   },
//   {
//     id: 2,
//     title: "EGYPT",
//     description: "Discover the Pyramids and rich history...",
//     image: "../../src/assets/bookNow.png",
//     thumbnails: ["/path-to-thumb3.jpg", "/path-to-thumb4.jpg"],
//   },
//   // Add more slides here
// ];

// const ImageSlider: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000); // Change slides every 5 seconds
//     return () => clearInterval(interval); // Cleanup
//   }, [currentIndex]);
  

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   };

//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
//   };

//   return (
//     <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
//       {/* Main Content */}
//       <div className="absolute bottom-1/4 ml-24 text-[#FEFEFE] transition-all duration-500 ease-in-out">
//         <h1 className="text-8xl font-league font-bold">{slides[currentIndex].title}</h1>
//         <p className="mt-4 max-w-md">{slides[currentIndex].description}</p>
//         <button className="mt-6 px-4 py-2 bg-white text-black rounded-lg">Explore</button>
//       </div>

//       {/* Navigation Thumbnails */}
//       <div className="absolute bottom-1/4 h-[218px] w-[163px] left-2/3 transform -translate-x-1/2 flex space-x-4">
//         {slides.map((slide, index) => (
//           <img
//             key={slide.id}
//             src={slide.image}
//             alt={slide.title}
//             className={` rounded-lg cursor-pointer ${index === currentIndex ? 'border-4 border-yellow-400' : ''}`}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>

//       {/* Arrows */}
//       <div className="absolute flex justify-between bottom-10 left-1/2 gap-6">
//         <button onClick={handlePrevious} className="text-white text-3xl"><img src="../../src/assets/left.svg" alt="" /></button>
//         <button onClick={handleNext} className="text-white text-3xl"><img src="../../src/assets/right.svg" alt="" /></button>
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;

import React, { useState } from 'react';

interface ImageData {
  src: string;
  title: string;
  description: string;
}

const images: ImageData[] = [
  {
    src: '../../src/assets/Footer-BG.png',
    title: 'Indonesia',
    description: 'Explore Indonesia, a stunning archipelago...',
  },
  {
    src: '../../src/assets/Footer-BG.png"',
    title: 'Bali',
    description: 'Visit the beautiful beaches of Bali...',
  },
  // Add more images as needed
];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      <div className="absolute inset-0 transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-full flex items-center justify-center bg-cover bg-center" style={{ backgroundImage:` url(${image.src})` }}>
            <div className="absolute bottom-10 left-10 text-white">
              <h2 className="text-4xl font-bold">{image.title}</h2>
              <p className="mt-2">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`cursor-pointer transition-transform duration-300 ${currentIndex === index ? 'scale-110' : 'scale-100'}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img src={image.src} alt={image.title} className="w-20 h-20 object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;