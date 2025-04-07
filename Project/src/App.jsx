import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'animate.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="bg-black text-white">
      {/* Navbar */}
      <nav className="px-6 py-4 flex justify-between items-center bg-black">
        <h1 className="text-3xl font-bold cursor-pointer">PixelPro</h1>
        <ul className={`md:flex space-x-8 ${menuOpen ? 'flex' : 'hidden'} md:block`}>
          <li><a href="#home" className="hover:text-yellow-500 transition">Home</a></li>
          <li><a href="#services" className="hover:text-yellow-500 transition">Services</a></li>
          <li><a href="#portfolio" className="hover:text-yellow-500 transition">Portfolio</a></li>
          <li><a href="#contact" className="hover:text-yellow-500 transition">Contact</a></li>
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>
          <div className="space-y-2">
            <div className="w-6 h-1 bg-yellow-500"></div>
            <div className="w-6 h-1 bg-yellow-500"></div>
            <div className="w-6 h-1 bg-yellow-500"></div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 bg-black">
        <h2 className="text-4xl font-bold mb-4 text-white">Transform Your Digital Presence</h2>
        <p className="text-lg mb-6 text-yellow-400">We create websites that drive business growth and help you stand out.</p>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-400 transition">Get Started</button>
      </header>
    </div>
  );
}

export default App;