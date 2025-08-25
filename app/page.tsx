import Hero from "./components/Hero";
import Lanyard from "./components/Lanyard/Lanyard";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import { CometCardDemo } from "./components/ui/comet-card-demo"; // Import the CometCardDemo
import "./globals.css"; // Ensure global styles are imported

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div className="opacity-99">
        <Hero />
      </div>

      <Skills />

      {/* New Comet Card Section */}

      <CometCardDemo />
      <Footer />

      <div className="lanyard-container absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="relative w-full h-full">
          <Lanyard position={[2, 0, 20]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </div>
  );
}
