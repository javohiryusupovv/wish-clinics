// src/components/sections/Services.tsx
const servicesData = [
  { title: "Терапия", desc: "Бережное лечение кариеса, пульпита и заболеваний десен с использованием микроскопа.", icon: "🦷" },
  { title: "Ортодонтия", desc: "Исправление прикуса любой сложности с помощью элайнеров и современных систем.", icon: "⫽" },
  { title: "Имплантация", desc: "Восстановление зубов за один день. Премиальные имплантаты с гарантией.", icon: "⚙️" },
  { title: "Эстетика", desc: "Создание идеальной «голливудской» улыбки: виниры, отбеливание и реставрация.", icon: "✨" },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Наши услуги</h2>
          <button className="text-cyan-500 font-bold flex items-center gap-1 hover:gap-2 transition-all">
            Все услуги <span>→</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[32px] border border-slate-100 hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-300 group cursor-pointer">
              <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-2xl mb-8 group-hover:bg-cyan-400 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}