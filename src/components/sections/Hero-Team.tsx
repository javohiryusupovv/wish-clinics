'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import userImg from "../../../public/stomatolog-1.png";

const doctors = [
  { id: 'dr_ivanov', image: userImg },
  { id: 'dr_smirnova', image: userImg },
  { id: 'dr_petrov', image: userImg },
];

export default function Specialists() {
  const t = useTranslations('Specialists');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Sarlavha qismi */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-slate-500 text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Shifokorlar gridi: Mobile: 1, Tablet: 2, Desktop: 3 ustun */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {doctors.map((doc) => (
            <div key={doc.id} className="group text-center">
              {/* Rasm konteyneri */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-[2rem] md:rounded-[2.5rem] shadow-lg transition-transform duration-300 group-hover:-translate-y-2">
                <Image
                  src={doc.image}
                  alt={t(`${doc.id}.name`)}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Ma'lumotlar qismi */}
              <div className="space-y-2 px-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                  {t(`${doc.id}.name`)}
                </h3>
                <p className="text-cyan-500 font-semibold text-sm md:text-base">
                  {t(`${doc.id}.role`)}
                </p>
                <p className="text-slate-400 text-sm leading-relaxed max-w-[280px] mx-auto">
                  {t(`${doc.id}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}