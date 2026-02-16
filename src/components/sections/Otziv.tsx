'use client';

import { useTranslations } from 'next-intl';
import { reviewsData } from '@/constants/data';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function Reviews() {
    const t = useTranslations('Reviews');

    return (
        <section className="py-20 bg-slate-50/50 overflow-hidden">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                    {t('title')}
                </h2>
            </div>

            {/* First Marquee (right direction) */}
            <div className="overflow-visible max-w-[1900px] m-auto w-full mb-[24px]">
                <Marquee direction="right" speed={30} gradient={true} pauseOnHover={true}>
                    {reviewsData.map((review) => (
                        <ReviewCard key={review.id} review={review} t={t} />
                    ))}
                </Marquee>
            </div>

            {/* Second Marquee (left direction) */}
            <div className="overflow-visible max-w-[1600px] m-auto w-full mb-[24px]">
                <Marquee direction="left" speed={30} gradient={true} pauseOnHover={true}>
                    {reviewsData
                        .slice()
                        .reverse()
                        .map((review) => (
                            <ReviewCard key={review.id} review={review} t={t} />
                        ))}
                </Marquee>
            </div>
        </section>
    );
}

// Ichki Card komponenti
function ReviewCard({ review, t }: any) {
    return (
        <div className="lg:max-w-[343px] max-w-[300px] h-[170px] mx-4 max-sm:mx-2 border border-[#E3E8E9]/50 rounded-[16px] sm:p-[20px] p-[12px] bg-white pointer-events-none select-none">
            <div className="flex items-center gap-3">
                {/* Avatar (Initials bo'lgani uchun div ishlatildi, rasm bo'lsa Image ga o'zgartiring) */}
                <div className="flex items-center justify-center w-[45px] h-[45px] max-sm:w-[35px] max-sm:h-[35px] bg-cyan-100 text-cyan-600 rounded-full font-bold text-sm border border-cyan-50 shrink-0">
                    {review.initials}
                </div>
                <div>
                    <h2 className="font-semibold text-[#022F5E] leading-[130%] sm:text-[16px] text-[13px]">
                        {review.name}
                    </h2>
                    <p className="text-[#8E9BA8] text-[11px] sm:text-[12px]">
                        {t(`services.${review.serviceKey}`)}
                    </p>
                </div>
            </div>

            <hr className="my-[12px] border-[#F5F6F7]" />
            {/* Comment */}
            <p className="font-normal sm:text-[14px] leading-[150%] text-[#121C25] text-[13px] line-clamp-3 italic">
                "{t(`texts.${review.textKey}`)}"
            </p>
        </div>
    );
}