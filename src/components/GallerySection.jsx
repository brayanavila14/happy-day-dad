import React from 'react';
import papa1 from '../assets/images/papa1.jpeg';
import papa2 from '../assets/images/papa2.jpeg';
import papa3 from '../assets/images/papa3.jpeg';
import papa4 from '../assets/images/papa4.jpeg';
import papa5 from '../assets/images/papa5.jpeg';
import papa6 from '../assets/images/papa6.jpeg';
import papa7 from '../assets/images/papa7.jpeg';
import papa8 from '../assets/images/papa8.jpeg';

const images = [papa1, papa2, papa3, papa4, papa5, papa6, papa7, papa8];

const GallerySection = () => (
    <section className="py-10 bg-gray-950 px-4">
        <h2 className="text-center text-2xl font-semibold text-white mb-6 glow-text">
            Recuerdos contigo
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-auto rounded-xl object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                />
            ))}
        </div>
    </section>
);

export default GallerySection;