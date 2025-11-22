import React from 'react';
import { ServiceItem } from '../types';
import { Sparkles, Camera, User, GlassWater } from 'lucide-react';

const services: (ServiceItem & { icon: React.ReactNode })[] = [
  {
    title: "NightLife Photography",
    price: "Từ 1.500.000đ / giờ",
    description: "Dành cho Bar, Pub, Lounge hoặc các sự kiện âm nhạc. Bắt trọn không khí sôi động, ánh sáng laser và cảm xúc thăng hoa.",
    features: ["Xử lý ánh sáng khó", "Trả ảnh nhanh trong 24h", "Highlight moments", "Chỉnh màu Neon/Dark"],
    icon: <GlassWater className="w-6 h-6 text-gold-accent" />
  },
  {
    title: "Profile & Branding",
    price: "Từ 2.000.000đ / concept",
    description: "Xây dựng hình ảnh cá nhân chuyên nghiệp cho doanh nhân, KOLs, hoặc profile hẹn hò, mạng xã hội.",
    features: ["Tư vấn Concept & Stylist", "Hướng dẫn Posing", "Chỉnh sửa da High-end", "Studio hoặc Ngoại cảnh"],
    icon: <User className="w-6 h-6 text-gold-accent" />
  },
  {
    title: "Concept & Áo Dài",
    price: "Liên hệ báo giá",
    description: "Thực hiện các bộ ảnh nghệ thuật, lookbook thời trang hoặc lưu giữ nét đẹp truyền thống với Áo Dài.",
    features: ["Địa điểm độc đáo", "Blend màu điện ảnh", "Hỗ trợ tìm make-up", "File gốc chất lượng cao"],
    icon: <Camera className="w-6 h-6 text-gold-accent" />
  },
  {
    title: "Tiệc Sinh Nhật",
    price: "Từ 2.500.000đ / tiệc",
    description: "Ghi lại những khoảnh khắc vui vẻ, tự nhiên nhất bên gia đình và bạn bè trong ngày đặc biệt.",
    features: ["Chụp phóng sự tự nhiên", "Chụp check-in khách mời", "Không giới hạn file chụp", "Chỉnh sửa toàn bộ"],
    icon: <Sparkles className="w-6 h-6 text-gold-accent" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-stone-900 text-stone-200 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-4">Dịch Vụ</h2>
          <p className="text-stone-400 font-light max-w-2xl mx-auto">
            Mỗi thể loại ảnh đều có ngôn ngữ riêng. Tôi mang đến giải pháp hình ảnh phù hợp nhất cho nhu cầu của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-stone-800/30 p-8 border border-stone-800 hover:border-gold-accent/50 transition-all duration-300 hover:bg-stone-800/60 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-stone-900 rounded-full border border-stone-700 group-hover:border-gold-accent/50 transition-colors">
                  {service.icon}
                </div>
                <p className="text-lg text-white font-medium">{service.price}</p>
              </div>
              
              <h3 className="font-serif text-2xl text-white mb-3 group-hover:text-gold-accent transition-colors">{service.title}</h3>
              
              <p className="text-stone-400 text-sm leading-relaxed mb-6 min-h-[60px]">
                {service.description}
              </p>
              
              <div className="w-full h-px bg-stone-700 mb-6"></div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-2 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-stone-300 font-light">
                    <span className="mr-2 text-gold-accent text-xs">■</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className="block w-full text-center py-3 border border-stone-600 text-stone-300 hover:bg-white hover:text-stone-900 hover:border-white transition-all duration-300 text-xs uppercase tracking-widest font-medium"
              >
                Nhận tư vấn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;