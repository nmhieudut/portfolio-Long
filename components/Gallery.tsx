import React, { useState } from 'react';
import { Category, Photo } from '../types';

// Sample Data tailored for Nightlife, Profile, Ao Dai, Birthday
const photos: Photo[] = [
  // Nightlife
  { id: '1', url: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?q=80&w=800&auto=format&fit=crop', category: Category.NIGHTLIFE, title: 'Sky 36 Bar' },
  { id: '2', url: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=800&auto=format&fit=crop', category: Category.NIGHTLIFE, title: 'New Phuong Dong' },
  { id: '3', url: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop', category: Category.NIGHTLIFE, title: 'DJ Performance' },
  
  // Ao Dai & Concept
  { id: '4', url: 'https://images.unsplash.com/photo-1557779953-0a8527a7f940?q=80&w=800&auto=format&fit=crop', category: Category.AO_DAI_CONCEPT, title: 'Hoi An Ancient Town' },
  { id: '5', url: 'https://images.unsplash.com/photo-1526265987292-e3569bbb28e1?q=80&w=800&auto=format&fit=crop', category: Category.AO_DAI_CONCEPT, title: 'Muse Concept' },
  { id: '6', url: 'https://images.unsplash.com/photo-1623635665637-c24d765c7556?q=80&w=800&auto=format&fit=crop', category: Category.AO_DAI_CONCEPT, title: 'Vietnam Beauty' },
  
  // Profile
  { id: '7', url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop', category: Category.PROFILE, title: 'CEO Branding' },
  { id: '8', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop', category: Category.PROFILE, title: 'Fashion Lookbook' },
  { id: '9', url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop', category: Category.PROFILE, title: 'Artist Profile' },
  
  // Birthday
  { id: '10', url: 'https://images.unsplash.com/photo-1530103862676-de3c9a59aa38?q=80&w=800&auto=format&fit=crop', category: Category.EVENT, title: 'Sweet 20' },
  { id: '11', url: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop', category: Category.EVENT, title: 'Private Party' },
  { id: '12', url: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=800&auto=format&fit=crop', category: Category.EVENT, title: 'Celebration' },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(Category.ALL);

  const filteredPhotos = activeCategory === Category.ALL 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-stone-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">Portfolio</h2>
          <p className="text-stone-400 font-light tracking-wide mb-10">Những khoảnh khắc ấn tượng nhất</p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {Object.values(Category).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs md:text-sm uppercase tracking-widest transition-all duration-300 pb-2 border-b-2 ${
                  activeCategory === cat 
                    ? 'text-gold-accent border-gold-accent' 
                    : 'text-stone-500 border-transparent hover:text-stone-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid simulation */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="break-inside-avoid group relative overflow-hidden cursor-pointer"
            >
              <img 
                src={photo.url} 
                alt={photo.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-gold-accent text-[10px] uppercase tracking-widest mb-2 font-medium">{photo.category}</p>
                  <h3 className="text-white font-serif text-xl tracking-wide">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;