import React from 'react';
import { Instagram, Facebook, Camera } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 md:order-1">
            <div className="aspect-[3/4] w-full max-w-md mx-auto relative group">
               {/* Decorative Border */}
              <div className="absolute inset-0 border border-gold-accent/30 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <img 
                src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/492492983_1903635797119729_4848279075291769297_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WbPGkU921VUQ7kNvwElPtHJ&_nc_oc=Adn3DN1JxPO2ues_uwcKBXTRgL_rVVpJzM4x0gyQOl-4WG0emUZfbES0Lz4LogEIy1o&_nc_zt=23&_nc_ht=scontent.fdad3-5.fna&_nc_gid=E9DoKYNvElAli9gzf1x-vA&oh=00_Afh9KgHmLbesbmxXz52mSX-5Ujh6T3KD8jj7mC8rGJqLiA&oe=6927174D" 
                alt="Long Nho Portrait" 
                className="w-full h-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <p className="text-gold-accent text-sm uppercase tracking-widest mb-2">Photographer tại Đà Nẵng</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
              Long Nho
            </h2>
            <div className="w-16 h-px bg-stone-700 mb-8 mx-auto md:mx-0"></div>
            
            <p className="text-lg leading-relaxed font-light mb-6">
              Tôi không chỉ chụp ảnh, tôi ghi lại <strong>"Vibe"</strong>. Dù đó là ánh đèn neon cuồng nhiệt của những buổi tiệc Nightlife, hay vẻ đẹp thướt tha đậm chất thơ của tà áo dài Việt Nam.
            </p>
            
            <p className="text-lg leading-relaxed font-light mb-8">
              Với kinh nghiệm làm việc tại các Bar/Club hàng đầu Đà Nẵng và thực hiện nhiều bộ concept cá nhân, tôi hiểu cách dùng ánh sáng để kể câu chuyện của bạn. Từ những shot hình Profile chuyên nghiệp cho đến những bữa tiệc sinh nhật đáng nhớ, tôi luôn cam kết chất lượng hình ảnh sắc nét và cảm xúc nhất.
            </p>
            
            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <a href="#" className="hover:text-gold-accent transition-colors flex items-center gap-2">
                <Instagram strokeWidth={1.5} size={20} /> <span className="text-sm uppercase tracking-wider">Instagram</span>
              </a>
              <a href="#" className="hover:text-gold-accent transition-colors flex items-center gap-2">
                <Facebook strokeWidth={1.5} size={20} /> <span className="text-sm uppercase tracking-wider">Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
