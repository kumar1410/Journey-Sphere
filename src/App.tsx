import Footer from "./Components/Footer";
import BookNow from "./Components/BookNow";
import Gallery from "./Components/Gallery";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

function App() {
  return (
    <>
      {/* <ImageSlider /> */}
      <Navbar />
      <HeroSection/>
      <Gallery/>
      <BookNow />
      <Footer />
    </>
  );
}

export default App;
