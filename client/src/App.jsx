import React from 'react';
import Hero from './Component/Hero';
import Navbar from './Component/Navbar';
import Properties from './Component/Properties';
import Agents from './Component/Agents';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Gallery from './Component/Gallery';

function App() {
  return (
    <div className='home'>
      <Hero />
      <Navbar />
      <Properties />
      <Gallery />
      <Agents />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;