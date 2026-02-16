'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Description */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cyan-400 rounded-lg flex items-center justify-center text-white text-xl">🦷</div>
              <span className="font-bold text-xl text-slate-800 tracking-tight">StomaCare</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              {t('description')}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 items-center">
              <Link href="#" className="p-2 bg-slate-50 rounded-full hover:bg-cyan-50 hover:text-cyan-500 transition-colors text-slate-400">
                🌐
              </Link>
              <Link href="#" className="p-2 bg-slate-50 rounded-full hover:bg-cyan-50 hover:text-cyan-500 transition-colors text-slate-400">
                ✈️
              </Link>
              <Link href="#" className="p-2 bg-slate-50 rounded-full hover:bg-cyan-50 hover:text-cyan-500 transition-colors text-slate-400">
                ✉️
              </Link>
            </div>
          </div>

          {/* Links Columns */}
          {['services', 'patients', 'about'].map((col) => (
            <div key={col} className="space-y-6">
              <h4 className="font-bold text-slate-900">{t(`columns.${col}.title`)}</h4>
              <ul className="space-y-4">
                {(t.raw(`columns.${col}.items`) as string[]).map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-slate-400 hover:text-cyan-500 text-sm transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-300 text-xs">
           &copy; {new Date().getFullYear()} - {t('copy')}
          </p>
          <div className="flex gap-6 text-xs text-slate-300">
            <Link href="#" className="hover:underline">{t('policy')}</Link>
            <Link href="#" className="hover:underline">{t('agreement')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}