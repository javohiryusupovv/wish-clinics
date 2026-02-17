'use client';

import { useState, useRef, useEffect } from 'react';
import { openModal } from '@/src/features/modalSlice';
import { Link, usePathname, useRouter } from '@/src/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { useParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import Logo from "../../../public/logo/wish.png"
import Image from 'next/image';
import { HiOutlineGlobeAlt, HiMenuAlt3, HiX } from 'react-icons/hi';
import { IoChevronDownOutline } from 'react-icons/io5';

export default function NavbarLayout() {
  const t = useTranslations('Navbar');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const dispatch = useDispatch();

  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Burger menyu holati
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Mobil menyu ochilganda orqa fon scroll bo'lishini to'xtatish
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Komponent unmount bo'lganda (o'chirilganda) scrollni qaytarish (tozalash)
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Sahifa o'zgarganda menyuni yopish
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const handleLanguageChange = (nextLocale: string) => {
    router.replace({ pathname, params } as any, { locale: nextLocale });
    setIsLangOpen(false);
  };

  const navLinks = [
    { href: '/our-service', label: 'services' },
    // { href: '/doctors', label: 'doctors' },
    { href: '/gallery', label: 'gallery' },
    // { href: '/reviews', label: 'reviews' },
    { href: '/contacts', label: 'contacts' },
  ];

  const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100 font-sans">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">

        {/* 1. Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image src={Logo} alt='Wish Clinics' width={70} height={70} />
        </Link>

        {/* 2. Desktop Menu */}
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

        {/* 3. Actions Section */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Language Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer text-slate-700"
            >
              <HiOutlineGlobeAlt className="text-xl text-cyan-500" />
              <span className="font-bold text-xs md:text-sm uppercase">{locale}</span>
              <IoChevronDownOutline className={`text-[10px] transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-white border border-gray-100 rounded-xl shadow-xl py-2 z-[60]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm font-semibold hover:bg-cyan-50 ${locale === lang.code ? 'text-cyan-500 bg-cyan-50/50' : 'text-slate-600'
                      }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop: Zayavka tugmasi | Mobile: Burger Menu */}
          <div className="flex items-center">
            {/* Faqat Desktopda ko'rinadi */}
            <button
              onClick={() => dispatch(openModal())}
              className="hidden lg:block bg-cyan-400 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-cyan-500 transition-all active:scale-95 whitespace-nowrap text-sm"
            >
              {t('button')}
            </button>

            {/* Faqat Mobil/Planshetda ko'rinadi (Burger) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-cyan-500 transition-colors cursor-pointer"
            >
              {isMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menyu (Overlay) */}
      <div className={`fixed h-screen inset-0 top-20 bg-white z-[40] lg:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 gap-6 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="flex items-center gap-3 text-xl font-semibold text-slate-700 hover:text-cyan-500 transition-colors py-2 border-b border-gray-50"
            >
              <span className="text-cyan-400 text-lg">•</span>
              {t(link.label)}
            </Link>
          ))}

          {/* Mobil menyu ichidagi harakat tugmasi */}
          <button
            onClick={() => {
              dispatch(openModal());
              setIsMenuOpen(false);
            }}
            className="mt-4 bg-cyan-400 text-white w-full py-4 rounded-2xl font-bold text-lg shadow-lg shadow-cyan-100 active:scale-[0.98]"
          >
            {t('button')}
          </button>
        </div>
      </div>
    </nav>
  );
}