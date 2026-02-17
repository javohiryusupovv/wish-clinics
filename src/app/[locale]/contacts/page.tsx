import { useTranslations } from "next-intl";
import { HiLocationMarker, HiPhone, HiClock, HiChatAlt2 } from "react-icons/hi";
import ContactForm from "./_components/ContactForm";
import ContactMap from "@/src/components/ui/ContactMap";

export default function ContactPage() {
  const t = useTranslations("Contact");

  return (
    <main className="pt-32 pb-20 bg-slate-50/50 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-2xl mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            {t("title")}
          </h1>
          <p className="text-slate-500 text-lg leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Form */}
          <ContactForm />

          {/* Right: Info & Map */}
          <div className="space-y-10 lg:pl-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Location */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0">
                  <HiLocationMarker className="text-2xl text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{t("location")}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Prospect Lenina, 105<br/>Moscow, Russia, 119049</p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0">
                  <HiPhone className="text-2xl text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{t("phone_numbers")}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">+7 (495) 123-45-67<br/>+7 (800) 555-01-99</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0">
                  <HiClock className="text-2xl text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{t("working_hours")}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Mon-Fri: 09:00 - 20:00<br/>Sat: 10:00 - 18:00</p>
                </div>
              </div>

              {/* Support */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0">
                  <HiChatAlt2 className="text-2xl text-cyan-500" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{t("support")}</h4>
                  <div className="flex gap-3 text-sm font-bold text-cyan-500">
                    <a href="#" className="hover:underline">WhatsApp</a>
                    <a href="#" className="hover:underline">Telegram</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[350px] rounded-xl overflow-hidden border border-slate-100">
              <ContactMap/>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}