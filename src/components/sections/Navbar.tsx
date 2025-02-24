import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import Img from './Img';

export default function Navbar() {
  return (
    <section className="flex justify-center">
      <nav className="fixed top-4 w-full bg-white z-50 border border-gray-100 shadow-navbar rounded-md max-w-max px-10 py-3 flex justify-between">
        <Link href="/">
          <Img src="/logo.svg" alt="HalaNanny" />
        </Link>
        <div className="flex items-center gap-8">
          <div className="flex gap-6 items-center text-sm font-bold">
            <Link href="/steps" className="text-gray-600 hover:text-gray-900">Steps</Link>
            <Link href="/our-nannies" className="text-gray-600 hover:text-gray-900">Our Nannies</Link>
            <Link href="/plans" className="text-gray-600 hover:text-gray-900">Plans</Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
            <Link href="/why-halananny" className="text-gray-600 hover:text-gray-900">Why HalaNanny</Link>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-gray-600 font-bold text-sm">Login</Button>
            <Button className="bg-teal-500 hover:bg-teal-600 font-semibold">Register</Button>
            <div className="flex items-center gap-2 ml-2 text-sm font-bold">
              <span className="text-gray-600">En</span>
              <span className="text-gray-400">Ar</span>
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
