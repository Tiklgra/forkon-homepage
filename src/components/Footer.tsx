'use client';

import {useTranslations, useLocale} from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import {Linkedin, Youtube} from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  return (
    <footer className="bg-forkon-blue text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Image
              src="/assets/images/67d6fdca3b8ea3d74db3fba1_Bild6_copy-removebg-preview.webp"
              alt="ForkOn"
              width={120}
              height={40}
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">
              {t('tagline')}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/forkon/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/@forkon9207"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/audit`} className="text-gray-300 hover:text-white transition-colors">
                  360° Audit
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/solutions`} className="text-gray-300 hover:text-white transition-colors">
                  Lösungen
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/case-studies`} className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/legal/privacy`} className="text-gray-300 hover:text-white transition-colors">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/imprint`} className="text-gray-300 hover:text-white transition-colors">
                  {t('imprint')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/terms`} className="text-gray-300 hover:text-white transition-colors">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2026 {t('company')}. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Image
              src="/assets/images/67d6fe1a6561d1219bec351d_BMWK_Fz_2021_Office_Farbe_en.webp"
              alt="BMWK"
              width={80}
              height={24}
              className="h-6 w-auto opacity-70"
            />
            <Image
              src="/assets/images/seal-zim.webp"
              alt="ZIM Seal"
              width={60}
              height={20}
              className="h-5 w-auto opacity-70"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}