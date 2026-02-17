// src/components/sections/Services.tsx
import { servicesData } from "@/constants/data";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation"; // To'g'ri Link importi

interface ServiceLimit {
  limit?: number;
}

export default function Services({ limit }: ServiceLimit) {
  const t = useTranslations('Services');
  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    // SEO: Section tegiga tushunarli ID va aria-label berish qidiruv tizimlari uchun foydali
    <section 
      id="services" 
      className="bg-gray-50/30 pt-24 pb-16 font-sans"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div className="max-w-2xl">
            {/* SEO: H2 asosiy sarlavha uchun */}
            <h2 
              id="services-heading" 
              className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight"
            >
              {t('title')}
            </h2>
            {/* Agar JSONda subtitle bo'lsa, SEO uchun tavsif qo'shish maqsadga muvofiq */}
            <p className="text-slate-500 text-lg">
              {t('subtitle')}
            </p>
          </div>

          {limit && (
            <Link href="/our-service">
              <button className="cursor-pointer text-cyan-500 font-bold flex items-center gap-2 hover:gap-3 transition-all group">
                {t('all_services')} 
                <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
              </button>
            </Link>
          )}
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayServices.map((service, idx) => (
            // SEO: Har bir xizmatni <article> ichiga olish strukturani mustahkamlaydi
            <article
              key={service.id || idx}
              className="bg-white p-8 rounded-[32px] border border-slate-100 hover:shadow-2xl hover:shadow-cyan-100/50 transition-all duration-500 group cursor-pointer flex flex-col h-full"
            >
              {/* Icon - Dekorativ element ekanligini bildirish */}
              <div 
                className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-3xl mb-10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shrink-0"
                aria-hidden="true"
              >
                <service.iconType />
              </div>

              {/* SEO: H3 xizmat nomi uchun juda muhim */}
              <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-cyan-600 transition-colors">
                {t(`items.${service.idKey}.title`)}
              </h3>

              {/* Tavsif */}
              <p className="text-slate-500 leading-relaxed text-[15px] mb-10 flex-grow">
                {t(`items.${service.idKey}.desc`)}
              </p>

              {/* Link va Action */}
              <Link href="/our-service" className="self-start mt-auto inline-block">
                <div className="flex items-center text-cyan-500 font-bold text-sm group/btn shrink-0">
                  <span className="border-b-2 border-transparent group-hover/btn:border-cyan-500 transition-all">
                    {t('more')}
                  </span>
                  <span className="ml-2 transform transition-transform group-hover/btn:translate-x-2">→</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}