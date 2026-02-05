'use client';

import {useState} from 'react';
import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import {Menu, X, Globe} from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('Navigation');
  const locale = useLocale();

  const navigation = [
    {name: t('home'), href: `/${locale}`},
    {name: t('audit'), href: `/${locale}/audit`},
    {name: t('solutions'), href: `/${locale}/solutions`},
    {name: t('about'), href: `/${locale}/about`},
    {name: t('contact'), href: `/${locale}/contact`},
    {name: t('blog'), href: `/${locale}/blog`},
  ];

  const otherLocale = locale === 'de' ? 'en' : 'de';

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="container-max section-padding py-4" aria-label="Top">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex">
            <Link href={`/${locale}`} className="flex items-center">
              <Image
                src="/assets/images/67d6fdca3b8ea3d74db3fba1_Bild6_copy-removebg-preview.webp"
                alt="ForkOn"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-forkon-blue font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA & Language Switcher */}
          <div className="hidden lg:flex lg:gap-x-4 lg:items-center">
            <Link
              href={`/${otherLocale}`}
              className="flex items-center gap-1 text-gray-700 hover:text-forkon-blue transition-colors"
            >
              <Globe className="h-4 w-4" />
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href="https://forkongmbh.pipedrive.com/scheduler/82v7R9F2/digitale-flotten-analyse-dfa"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo buchen
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-forkon-blue"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-forkon-blue font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4">
                <Link
                  href={`/${otherLocale}`}
                  className="flex items-center gap-1 text-gray-700 hover:text-forkon-blue"
                >
                  <Globe className="h-4 w-4" />
                  {otherLocale.toUpperCase()}
                </Link>
                <Link
                  href="https://forkongmbh.pipedrive.com/scheduler/82v7R9F2/digitale-flotten-analyse-dfa"
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo buchen
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}