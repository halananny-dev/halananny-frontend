"use client";

import { useI18n } from '@/i18/i18Context';
import { cn } from "@/lib/utils";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { IoCloseSharp, IoMenuOutline } from "react-icons/io5";
import { navbarLinks } from '../constants';
import Dropdown from '../shared/Dropdown';
import { Button } from '../ui/button';
import Img from './Img';

export default function Navbar() {
  const { t, locale, setLocale } = useI18n();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const router = useRouter()

  useEffect(() => {
    const sections = navbarLinks.map(({ href }) => document.querySelector(href));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find(entry => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 }
    );

    sections.forEach(section => section && observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex justify-center">
      <nav className="navbar">
        <Link href="/">
          <Img
            src="/logo.svg"
            alt="HalaNanny"
            className="sm:w-32 w-28" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <div className="flex xl:gap-6 gap-3 items-center text-xs xl:text-sm font-bold">
            {navbarLinks.map(({ name, href }, index) => (
              <button
                onClick={() => router.push('/' + href)}
                key={index}
                className={cn(
                  "text-gray-900",
                  activeSection === href.replace("#", "") ? "border-b-2 border-teal-500" : ""
                )}
              >
                {t[name]}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-gray-900 font-bold text-sm hover:bg-gray-100">
                {t.login}
              </Button>
            </Link>
            <Link href="/register">
              <Button
                className="bg-teal-500 hover:bg-teal-600 font-semibold text-white px-4 py-2 leading-none rounded-full">
                {t.register}
              </Button>
            </Link>
            <div className="flex items-center gap-2 ml-2 text-sm font-bold">
              {['en', 'ar'].map(l => (
                <button
                  key={l}
                  className={cn(
                    "text-sm font-bold transition-colors duration-300",
                    locale === l ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                  )}
                  onClick={() => setLocale(l)}
                >
                  {t[l.toUpperCase()]}
                </button>
              ))}
            </div>
          </div>

          <Dropdown />
        </div>

        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ?
            <IoCloseSharp className="text-gray-900 text-3xl" /> :
            <IoMenuOutline className="text-gray-900 text-3xl" />}
        </button>
      </nav>

      <div
        className={cn(
          "fixed top-0 px-4 left-0 w-full h-full bg-white z-[55] transform",
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
          "transition-transform justify-between py-10 duration-300 lg:hidden flex flex-col items-start shadow-xl"
        )}
      >
        <div className="flex flex-col pt-20 gap-4">
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
        </div>
        <div className="flex items-center gap-4 max-w-sm w-full">
          <Button
            variant="outline"
            className="text-gray-600 w-full font-bold text-lg hover:bg-gray-100">
            {t.login}
          </Button>
          <Button
            className="bg-teal-500 hover:bg-teal-600 font-semibold w-full text-white px-5 py-2 text-lg">
            {t.register}
          </Button>
        </div>
      </div>
    </section>
  );
}
