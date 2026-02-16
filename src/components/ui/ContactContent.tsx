'use client';
import { useTranslations } from 'next-intl';

export default function ContactContent() {
  const t = useTranslations('Contact');

  return (
    <div className="flex-1 space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{t('title')}</h2>
        <p className="text-slate-500 max-w-lg leading-relaxed">{t('subtitle')}</p>
      </div>

      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input 
            type="text" 
            placeholder={t('form.name')} 
            className="w-full p-4 bg-white border border-slate-100 rounded-xl outline-none focus:ring-2 ring-cyan-400 transition"
          />
          <input 
            type="text" 
            placeholder={t('form.phone')} 
            className="w-full p-4 bg-white border border-slate-100 rounded-xl outline-none focus:ring-2 ring-cyan-400 transition"
          />
        </div>
        <textarea 
          rows={4} 
          placeholder={t('form.message')} 
          className="w-full p-4 bg-white border border-slate-100 rounded-xl outline-none focus:ring-2 ring-cyan-400 transition resize-none"
        ></textarea>
        <button className=" cursor-pointer w-full py-4 bg-cyan-400 text-white font-bold rounded-xl hover:bg-cyan-500 transition shadow-lg shadow-cyan-100">
          {t('form.submit')}
        </button>
      </form>

      <div className="grid grid-cols-2 gap-y-8 pt-4">
        <div>
          <h4 className="text-cyan-400 text-xs font-bold mb-1 tracking-widest">{t('info.address_label')}</h4>
          <p className="text-slate-900 font-medium">{t('info.address_value')}</p>
        </div>
        <div>
          <h4 className="text-cyan-400 text-xs font-bold mb-1 tracking-widest">{t('info.phone_label')}</h4>
          <p className="text-slate-900 font-medium">+7 (495) 123-45-67</p>
        </div>
        <div>
          <h4 className="text-cyan-400 text-xs font-bold mb-1 tracking-widest">{t('info.work_hours_label')}</h4>
          <p className="text-slate-900 font-medium">{t('info.work_hours_value')}</p>
        </div>
        <div>
          <h4 className="text-cyan-400 text-xs font-bold mb-1 tracking-widest">{t('info.email_label')}</h4>
          <p className="text-slate-900 font-medium">info@stomacare.ru</p>
        </div>
      </div>
    </div>
  );
}