import ContactContent from "../ui/ContactContent";
import ContactMap from "../ui/ContactMap";


export default function Contact() {
  return (
    <section className="py-20 bg-slate-50/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <ContactContent />
          <div className="flex-1 w-full h-145 rounded-[20px] overflow-hidden shadow-xl border border-white">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
}