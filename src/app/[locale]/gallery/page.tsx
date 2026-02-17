"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
// Rasmlar importi o'zgarishsiz qoladi...
import WishGalery1 from "../../../../public/galery/wish1.webp";
import WishGalery2 from "../../../../public/galery/wish2.webp";
import WishGalery3 from "../../../../public/galery/wish3.webp";
import WishGalery4 from "../../../../public/galery/wish4.webp";
import WishGalery5 from "../../../../public/galery/wish5.webp";
import WishGalery6 from "../../../../public/galery/wish6.jpg";

export default function Gallery() {
  const t = useTranslations("Gallery");

  const images = [
    { id: 1, src: WishGalery1, altKey: "interior" },
    { id: 2, src: WishGalery2, altKey: "equipment" },
    { id: 3, src: WishGalery3, altKey: "office" },
    { id: 4, src: WishGalery4, altKey: "reception" },
    { id: 5, src: WishGalery5, altKey: "treatment" },
    { id: 6, src: WishGalery6, altKey: "chair" },
  ];

  return (
    // <section> tegi semantic HTML uchun juda muhim
    <section className="py-24 bg-white" aria-labelledby="gallery-title">
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Sarlavha qismi - H2 tegi SEO uchun asosiy sarlavha hisoblanadi */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 
            id="gallery-title" 
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight"
          >
            {t("title")}
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        {/* Galereya Gridi - Figure va Figcaption ishlatish tavsiya etiladi */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <figure 
              key={image.id}
              className="relative overflow-hidden rounded-[15px] group cursor-pointer aspect-[4/3] shadow-lg hover:shadow-cyan-100/50 transition-all duration-500 bg-slate-100"
            >
              <Image
                src={image.src}
                // SEO uchun eng muhimi: har bir rasm uchun tarjima qilingan ALT text
                alt={t(`alt.${image.altKey}`)}
                fill
                // Next.js Image Optimization afzalliklari
                loading="lazy"
                placeholder="blur" 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              {/* Overlay - Screen Readers uchun yashirin matn qo'shildi */}
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <span className="sr-only">View image detail</span>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white" aria-hidden="true">
                  <span className="text-2xl">+</span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}