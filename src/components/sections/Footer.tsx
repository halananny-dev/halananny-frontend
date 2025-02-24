import Link from 'next/link';
import { footerLinks } from '../constants';
import Img from './Img';
import LanguageSelect from './Select';

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-20 text-white relative">
      <div className="max-w-max mx-auto p-20">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Img src="logo-white.svg" />
          </Link>
          <LanguageSelect />
        </div>

        <div className="flex justify-between gap-4 mt-12 mb-6">
          <div className='max-w-sm'>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='flex items-center mt-7 gap-5'>
              <Link href="/">
                <Img src="instagram.svg" />
              </Link>
              <Link href="/">
                <Img src="linkedin.svg" />
              </Link>
              <Link href="/">
                <Img src="facebook.svg" />
              </Link>
            </div>
          </div>
          {footerLinks.map((link, index) => (
            <div key={index} className="flex max-w-60 gap-6 flex-col">
              {link.map(({ href, name }, i) => (
                <Link className='hover:opacity-90 font-medium' href={href} key={i}>{name}</Link>
              ))}
            </div>
          ))}
        </div>
        <div className="border-t border-background/20 pt-7 mt-8">
          <p className="text-sm">
            © {new Date().getFullYear()} HalaNanny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
