'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const links = {
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Press', href: '/press' },
      { label: 'Blog', href: '/blog' }
    ],
    services: [
      { label: 'Find a Nanny', href: '/search' },
      { label: 'Become a Nanny', href: '/apply' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Background Checks', href: '/checks' }
    ],
    support: [
      { label: 'Help Center', href: '/help' },
      { label: 'Safety Center', href: '/safety' },
      { label: 'Community', href: '/community' },
      { label: 'Contact Us', href: '/contact' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
      { label: 'Accessibility', href: '/accessibility' }
    ]
  };

  return (
    <footer className="bg-primary-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2">
            <Link href="/" className="text-2xl font-bold mb-4 block">
              HalaNanny
            </Link>
            <p className="text-background/80 mb-4">
              Connecting families with trusted childcare professionals for a brighter future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {links.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/80 hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {links.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/80 hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {links.support.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/80 hover:text-background">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/80">
              © {new Date().getFullYear()} HalaNanny. All rights reserved.
            </p>
            <ul className="flex gap-8">
              {links.legal.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-background/80 hover:text-background text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
