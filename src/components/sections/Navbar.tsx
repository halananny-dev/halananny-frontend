"use client"

import { useI18n } from '@/i18/i18Context';
import Image from 'next/image';
import Link from 'next/link';
import { navbarLinks } from '../constants';
import { Button } from '../ui/button';
import Img from './Img';

export default function Navbar() {
  const { t, locale, setLocale } = useI18n()

  return (
    <section className="flex justify-center">
      <nav className="fixed top-4 w-full bg-white z-50 border border-gray-100 shadow-navbar rounded-md max-w-max px-10 py-3 flex justify-between">
        <Link href="/">
          <Img src="/logo.svg" alt="HalaNanny" />
        </Link>
        <div className="flex items-center gap-8">
          <div className="flex gap-6 items-center text-sm font-bold">
            {navbarLinks.map(({ name, href }, index) => (
              <Link href={href} key={index} className="text-gray-600 hover:text-gray-900">{t[name]}</Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-gray-600 font-bold text-sm">{t.login}</Button>
            <Button className="bg-teal-500 hover:bg-teal-600 font-semibold">{t.register}</Button>
            <div className="flex items-center gap-2 ml-2 text-sm font-bold">
              {['en', 'ar'].map(l => (
                <button key={l} className={"text-sm font-bold " + (locale === l ? "text-gray-900" : 'text-gray-400')} onClick={() => setLocale(l)}>{t[l.toUpperCase()]}</button>
              ))}
              <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                <Image
                  src="/globe.svg"
                  alt="Language"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
