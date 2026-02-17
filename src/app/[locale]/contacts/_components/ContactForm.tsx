"use client";

import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-xl shadow-slate-100 border border-slate-50">
      <h3 className="text-2xl font-bold text-slate-900 mb-8">{t("form_title")}</h3>
      
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">{t("first_name")}</label>
            <input type="text" placeholder="Enter first name" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">{t("last_name")}</label>
            <input type="text" placeholder="Enter last name" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 ml-1">{t("phone")}</label>
            <input type="text" placeholder="+7 (900) 000-00-00" className="w-full px-5 py-4 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-cyan-400 outline-none transition-all" />
          </div>
        </div>
        <button className="w-full bg-cyan-400 text-white font-bold py-5 rounded-xl hover:bg-cyan-500 transition-all shadow-lg shadow-cyan-100 active:scale-[0.98]">
          {t("submit")}
        </button>
      </form>
    </div>
  );
}