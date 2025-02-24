"use client"

import { useI18n } from '@/i18/i18Context';
import Link from 'next/link';
import { footerLinks } from '../constants';
import Img from './Img';
import LanguageSwitch from './LanguageSwitch';
import { useState, useEffect } from 'react';

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  const [showArrow, setShowArrow] = useState(false);
  const [stickToFooter, setStickToFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.querySelector("footer");
      const footerTop = footer?.offsetTop || 0;
      const windowHeight = window.innerHeight;

      setShowArrow(scrollY > 0);
      setStickToFooter(scrollY + windowHeight >= footerTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-gray-900 mt-20 text-white relative">
      <div className="max-w-max mx-auto lg:p-20 sm:p-10 p-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Img src="logo-white.svg" />
          </Link>
          <div className="hidden xl:block">
            <LanguageSwitch />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row xl:justify-between md:gap-4 gap-6 mt-12 mb-6">
          <div className='max-w-sm'>
            <p className="text-sm">{t.footer_about}</p>
            <div className='flex items-center mt-7 gap-5'>
              <Link href="/"><Img src="instagram.svg" /></Link>
              <Link href="/"><Img src="linkedin.svg" /></Link>
              <Link href="/"><Img src="facebook.svg" /></Link>
            </div>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index} className="flex max-w-60 md:gap-6 gap-3 flex-col">
              {column.map(({ href, name }, i) => (
                <Link className='hover:opacity-90 font-medium' href={href} key={i}>{t[name]}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="xl:hidden">
          <LanguageSwitch />
        </div>
        <div className="border-t border-background/20 pt-7 mt-8">
          <p className="text-sm text-center md:text-left">
            {t.footer_copyright.replace('{year}', currentYear)}
          </p>
        </div>
      </div>
      {showArrow && (
        <div className={`w-full z-50 flex justify-center ${stickToFooter ? "absolute top-0 -translate-y-1/2" : "fixed bottom-5"}`}>
          <div className='max-w-max w-full md:px-16 px-4 flex justify-end'>
            <img
              src="/arrow-top.svg"
              className="md:w-20 md:h-20 w-10 h-10 cursor-pointer transition-all duration-300"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
        </div>
      )}
    </footer>
  );
}
