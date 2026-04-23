import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./sections/HeroSection";
import FeaturedSection from "./sections/FeaturedSection";
import LookbookSection from "./sections/LookbookSection";
import SpotlightSection from "./sections/SpotlightSection";
import BrandSection from "./sections/BrandSection";
import GallerySection from "./sections/GallerySection";
import FAQSection from "./sections/FAQSection";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedSection />
        <LookbookSection />
        <SpotlightSection />
        <BrandSection />
        <GallerySection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
