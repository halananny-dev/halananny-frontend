"use client"

import { useI18n } from '@/i18/i18Context';
import Link from 'next/link';
import { footerLinks } from '../constants';
import Img from './Img';
import LanguageSwitch from './LanguageSwitch';

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 mt-20 text-white relative">
      <div className="max-w-max mx-auto p-20">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Img src="logo-white.svg" />
          </Link>
          <LanguageSwitch />
        </div>

        <div className="flex justify-between gap-4 mt-12 mb-6">
          <div className='max-w-sm'>
            <p className="text-sm">{t.footer_about}</p>
            <div className='flex items-center mt-7 gap-5'>
              <Link href="/"><Img src="instagram.svg" /></Link>
              <Link href="/"><Img src="linkedin.svg" /></Link>
              <Link href="/"><Img src="facebook.svg" /></Link>
            </div>
          </div>
          {footerLinks.map((column, index) => (
            <div key={index} className="flex max-w-60 gap-6 flex-col">
              {column.map(({ href, name }, i) => (
                <Link className='hover:opacity-90 font-medium' href={href} key={i}>{t[name]}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-background/20 pt-7 mt-8">
          <p className="text-sm">
            {t.footer_copyright.replace('{year}', currentYear)}
          </p>
        </div>
      </div>
    </footer>
  );
}
