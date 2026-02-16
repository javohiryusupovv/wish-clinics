'use client';

import { openModal } from '@/src/features/modalSlice';
import { Link, usePathname, useRouter } from '@/src/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';

export default function NavbarLayout() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const dispatch = useDispatch()

  // Tilni o'zgartirish funksiyasi
  const handleLanguageChange = (nextLocale: string) => {
    router.replace(
      // @ts-ignore
      { pathname, params },
      { locale: nextLocale }
    );
  };

  const navLinks = [
    { href: '/services', label: 'services' },
    { href: '/doctors', label: 'doctors' },
    { href: '/gallery', label: 'gallery' },
    { href: '/reviews', label: 'reviews' },
    { href: '/contacts', label: 'contacts' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-cyan-400 rounded-lg flex items-center justify-center group-hover:bg-cyan-500 transition-colors">
            <span className="text-white text-2xl">🦷</span>
          </div>
          <span className="font-bold text-xl text-slate-800 tracking-tight">StomaCare</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-slate-600 font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href as any} 
              className="hover:text-cyan-500 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
            >
              {t(link.label)}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <button onClick={()=> dispatch(openModal())} className=" cursor-pointer hidden sm:block bg-cyan-400 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-200 transition-all active:scale-95">
            {t('button')}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-2 text-sm font-bold border-l pl-6 border-gray-200">
            {['RU', 'EN'].map((lang, index) => (
              <div key={lang} className="flex items-center gap-2">
                <button
                  onClick={() => handleLanguageChange(lang.toLowerCase())}
                  className={` cursor-pointer transition-colors hover:text-cyan-500 ${
                    locale === lang.toLowerCase() ? 'text-cyan-500' : 'text-slate-400'
                  }`}
                >
                  {lang}
                </button>
                {index < 2 && <span className="text-slate-200 font-light">|</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}