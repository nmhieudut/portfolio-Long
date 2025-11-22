import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image - Neon/Nightlife Vibe */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1920&auto=format&fit=crop")', 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay with gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto fade-in">
        <p className="text-gold-accent uppercase tracking-[0.4em] text-xs md:text-sm mb-6 font-medium">
          Nightlife • Profile • Concept • Events
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 leading-none">
          Light <span className="text-stone-500">&</span> Vibe <br/>
          <span className="italic font-light text-4xl md:text-6xl block mt-4 text-stone-300">
             Đà Nẵng Photographer
          </span>
        </h1>
        <p className="text-stone-300 font-light text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Tôi là Hoàng Long. Chuyên bắt trọn nhịp sống về đêm, định hình phong cách cá nhân và tôn vinh vẻ đẹp Á Đông qua ống kính.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a 
            href="#gallery"
            className="inline-block px-8 py-3 bg-white text-stone-900 border border-white hover:bg-transparent hover:text-white transition-all duration-500 uppercase tracking-widest text-xs md:text-sm font-medium"
          >
            Xem Ảnh
          </a>
          <a 
            href="#contact"
            className="inline-block px-8 py-3 border border-stone-500 text-stone-300 hover:border-white hover:text-white transition-all duration-500 uppercase tracking-widest text-xs md:text-sm"
          >
            Đặt Lịch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/30">
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;