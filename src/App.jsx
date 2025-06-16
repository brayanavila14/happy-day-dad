import React from 'react';
import PoemSection from './components/PoemSection';
import GallerySection from './components/GallerySection';

function App() {
  return (
    <div className="text-white font-sans">
      <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 stars">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-yellow-400 glow-text fade-in-up mb-4">
          ¡Feliz Día del Padre, Emmanuel Ávila!
        </h1>
        <p className="text-lg sm:text-xl max-w-md text-gray-200 fade-in-up">
          Gracias por ser mi guía, mi ejemplo y mi inspiración. 🌟
        </p>
      </div>
      <PoemSection />
      <GallerySection />
    </div>
  );
}

export default App;