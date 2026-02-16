// src/components/sections/Hero.tsx
export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-block bg-cyan-50 text-cyan-500 px-4 py-1.5 rounded-md text-sm font-bold tracking-wide">
              ПРЕМИАЛЬНЫЙ СЕРВИС
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
              Профессиональная <br /> 
              <span className="text-slate-800">стоматология для всей семьи</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Современные методы лечения, высококвалифицированные врачи и комфортная атмосфера в самом сердце города.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="cursor-pointer bg-cyan-400 text-white px-8 py-4 rounded-2xl text-lg font-bold shadow-lg shadow-cyan-200 hover:scale-105 transition transform">
                Записаться онлайн
              </button>
              <button className="bg-white cursor-pointer border border-gray-100 text-slate-800 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-100 transition">
                Наши услуги
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="flex-1 w-full relative">
             <div className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl">
                <img 
                  src="https://thumbs.dreamstime.com/b/male-dentist-doctor-dental-clinic-portrait-male-dentist-doctor-dental-clinic-portrait-happy-dentistry-doctor-wearing-115998604.jpg" 
                  alt="Professional StomaCare Doctor" 
                  className="w-full h-auto object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}