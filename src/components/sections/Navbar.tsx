"use client";

import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useI18n } from '@/i18/i18Context';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { navbarLinks } from '../constants';
import { Button } from '../ui/button';
import Img from './Img';

export default function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navbarLinks.map(({ href }) => document.querySelector(href));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(entry => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 } // Trigger when 60% of section is visible
    );

    sections.forEach(section => section && observer.observe(section));

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <section className="flex justify-center">
      <nav className="fixed top-4 w-full bg-white z-[60] border border-gray-100 shadow-navbar rounded-md px-6 sm:px-10 py-3 flex justify-between items-center max-w-[calc(100%-32px)] xl:max-w-max">
        <Link href="/">
          <Img src="/logo.svg" alt="HalaNanny" className="sm:w-32 w-28" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex xl:gap-6 gap-3 items-center text-xs xl:text-sm font-bold">
            {navbarLinks.map(({ name, href }, index) => (
              <Link
                href={href}
                key={index}
                className={`text-gray-600 hover:text-gray-900 transition duration-300 ${activeSection === href.replace("#", "") ? "border-b-2 border-teal-500" : ""
                  }`}
              >
                {t[name]}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-600 font-bold text-sm hover:bg-gray-100">
                {t.login}
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-teal-500 hover:bg-teal-600 font-semibold text-white px-4 py-2 leading-none rounded-full">
                {t.register}
              </Button>
            </Link>
            <div className="flex items-center gap-2 ml-2 text-sm font-bold">
              {['en', 'ar'].map(l => (
                <button
                  key={l}
                  className={`text-sm font-bold transition-colors duration-300 ${locale === l ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  onClick={() => setLocale(l)}
                >
                  {t[l.toUpperCase()]}
                </button>
              ))}
            </div>
          </div>
          <Select>
            <SelectTrigger className="w-20 h-10 text-base border rounded-full bg-white shadow">
              <SelectValue placeholder={<Img src='/egypt.svg' className="w-5 h-5 rounded-full ltr:mr-3 rtl:ml-3" />} />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>

        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} className="text-gray-700" /> : <Menu size={28} className="text-gray-700" />}
        </button>
      </nav>

      <div
        className={`fixed top-0 px-4 left-0 w-full h-full bg-white z-[55] transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform justify-center duration-300 lg:hidden flex flex-col items-start gap-4 shadow-xl`}
      >
        {navbarLinks.map(({ name, href }, index) => (
          <Link
            href={href}
            key={index}
            className="text-gray-600 hover:text-gray-900 text-lg font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t[name]}
          </Link>
        ))}
        <div className="flex items-center gap-4 max-w-sm w-full">
          <Button variant="outline" className="text-gray-600 w-full font-bold text-lg hover:bg-gray-100">
            {t.login}
          </Button>
          <Button className="bg-teal-500 hover:bg-teal-600 font-semibold w-full text-white px-5 py-2 text-lg">
            {t.register}
          </Button>
        </div>
      </div>
    </section>
  );
}
