"use client";

import { openModal } from "@/src/features/modalSlice";
import { useTranslations } from "next-intl"; // Tarjima uchun
import { useRouter } from "@/src/i18n/navigation"; // DIQQAT: next/navigation emas!
import { useDispatch } from "react-redux";
import Tooth from "../../../public/tish3.png"
import Image from "next/image";
import { Hospital } from 'lucide-react';

export default function Hero() {
  const dispatch = useDispatch();
  const router = useRouter(); // next-intl routeri
  const t = useTranslations("Hero"); // JSON faylingizdagi "Hero" bo'limi uchun

  return (
    <section className="pt-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between flex-col lg:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-block bg-cyan-50 text-cyan-500 px-4 py-1.5 rounded-md text-sm font-bold tracking-wide uppercase">
              {t("badge")} {/* "ПРЕМИАЛЬНЫЙ СЕРВИС" */}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
              {t.rich("title", {
                br: () => <br />,
                span: (chunks) => <span className="text-slate-800">{chunks}</span>
              })}
            </h1>

            <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {t("desc")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => dispatch(openModal())}
                className="cursor-pointer bg-cyan-400 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-cyan-200 hover:scale-105 transition transform active:scale-95"
              >
                {t("btn_online")} {/* "Записаться онлайн" */}
              </button>

              <button
                onClick={() => router.push("/our-service")} // Locale shart emas, router o'zi biladi
                className="bg-white cursor-pointer border border-gray-100 text-slate-800 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-100 transition"
              >
                {t("btn_services")} {/* "Наши услуги" */}
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex-1 flex justify-end relative top-0 left-0">
            <Image src={Tooth} alt="Wish Clinics" className=" w-[300px] sm:w-[450px] h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}