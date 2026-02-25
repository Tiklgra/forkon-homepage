'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Menu, X, Globe } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('Nav');
  const locale = useLocale();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('problems'), href: '#problems' },
    { name: t('audit'), href: '#audit' },
    { name: t('fleet'), href: '#fleet' },
    { name: t('results'), href: '#results' },
    { name: t('about'), href: `/${locale}/about` },
  ];

  const otherLocale = locale === 'de' ? 'en' : 'de';

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-forkon-blue/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-forkon-blue/80 backdrop-blur-sm py-4'
      }`}
    >
      <nav className="container-max px-6" aria-label="Main">
        <div className="flex justify-between items-center">
          {/* Logo - Text Based */}
          <Link href={`/${locale}`} className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-forkon-orange rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Fork<span className="text-forkon-orange">On</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA & Language Switcher */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link
              href={`/${otherLocale}`}
              className="flex items-center gap-1.5 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Globe className="h-4 w-4" />
              {otherLocale.toUpperCase()}
            </Link>
            <Link
              href="#lead-magnet"
              className="px-4 py-2 text-white/90 hover:text-white text-sm font-medium border border-white/20 rounded-lg hover:border-white/40 transition-all"
            >
              {t('checklist')}
            </Link>
            <Link
              href="https://forkongmbh.pipedrive.com/scheduler/kOJ5wYhA/erstgesprach-zum-forkon-360-intralog-audit"
              className="btn-primary py-2.5 px-5 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('cta')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/80 hover:text-white font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                <Link
                  href={`/${otherLocale}`}
                  className="flex items-center gap-2 text-white/70 hover:text-white"
                >
                  <Globe className="h-4 w-4" />
                  {otherLocale === 'de' ? 'Deutsch' : 'English'}
                </Link>
                <Link
                  href="https://forkongmbh.pipedrive.com/scheduler/kOJ5wYhA/erstgesprach-zum-forkon-360-intralog-audit"
                  className="btn-primary text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('cta')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
