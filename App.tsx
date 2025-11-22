import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-stone-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Services />
        <Contact />
      </main>
      
      <footer className="py-8 border-t border-stone-800 text-center">
        <p className="text-stone-500 text-xs tracking-widest uppercase">
          © {new Date().getFullYear()} Hoang Long Photography. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;