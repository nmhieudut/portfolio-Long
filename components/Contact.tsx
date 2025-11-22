import React from 'react';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-stone-950 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <p className="text-gold-accent text-sm uppercase tracking-widest mb-2">Let's talk</p>
            <h2 className="font-serif text-4xl md:text-5xl text-white mb-8">Liên Hệ Booking</h2>
            <p className="font-light text-lg mb-10 leading-relaxed text-stone-400">
              Để có báo giá chính xác nhất cho buổi chụp Nightlife, Concept cá nhân hay Tiệc sinh nhật, vui lòng để lại thông tin chi tiết.
              <br/><br/>
              Tôi thường trả lời tin nhắn trong vòng 2 giờ.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="p-3 bg-stone-900 border border-stone-800 rounded-full mr-4 group-hover:border-gold-accent transition-colors">
                   <MapPin className="w-5 h-5 text-stone-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Địa điểm</p>
                  <span className="text-white">Hải Châu, Đà Nẵng, Việt Nam</span>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="p-3 bg-stone-900 border border-stone-800 rounded-full mr-4 group-hover:border-gold-accent transition-colors">
                   <Phone className="w-5 h-5 text-stone-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Điện thoại / Zalo</p>
                  <span className="text-white">+84 905 123 456</span>
                </div>
              </div>
              
              <div className="flex items-start group">
                 <div className="p-3 bg-stone-900 border border-stone-800 rounded-full mr-4 group-hover:border-gold-accent transition-colors">
                   <Mail className="w-5 h-5 text-stone-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Email</p>
                  <span className="text-white">booking@longnho.photo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-900 p-8 md:p-10 border border-stone-800 relative overflow-hidden">
             {/* Decorative accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-800 via-gold-accent to-stone-800"></div>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Tên của bạn</label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full bg-stone-950 border border-stone-800 text-white px-4 py-3 focus:outline-none focus:border-gold-accent/50 transition-colors rounded-sm"
                    placeholder="Hoang Long"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-xs uppercase tracking-wider text-stone-500 mb-2">SĐT / Zalo</label>
                  <input 
                    type="text" 
                    id="contact"
                    className="w-full bg-stone-950 border border-stone-800 text-white px-4 py-3 focus:outline-none focus:border-gold-accent/50 transition-colors rounded-sm"
                    placeholder="0905..."
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Dịch vụ quan tâm</label>
                <select 
                  id="service"
                  className="w-full bg-stone-950 border border-stone-800 text-stone-300 px-4 py-3 focus:outline-none focus:border-gold-accent/50 transition-colors rounded-sm"
                >
                  <option>Chụp Nightlife (Bar/Pub/Event)</option>
                  <option>Chụp Profile Cá Nhân</option>
                  <option>Chụp Concept / Áo Dài</option>
                  <option>Chụp Tiệc Sinh Nhật</option>
                  <option>Khác</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Nội dung chi tiết</label>
                <textarea 
                  id="message"
                  rows={4}
                  className="w-full bg-stone-950 border border-stone-800 text-white px-4 py-3 focus:outline-none focus:border-gold-accent/50 transition-colors resize-none rounded-sm"
                  placeholder="Thời gian, địa điểm dự kiến, ý tưởng của bạn..."
                ></textarea>
              </div>

              <button 
                type="button"
                className="w-full bg-white text-stone-900 py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold-accent hover:text-white transition-all duration-300"
              >
                Gửi yêu cầu booking
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;