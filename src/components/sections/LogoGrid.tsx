'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';

export default function LogoGrid() {
  const logos = [
    {
      name: 'Coca Cola',
      src: '/assets/images/coca-cola.webp',
      width: 120,
      height: 40
    },
    {
      name: 'Deutsche Bahn',
      src: '/assets/images/db-logo.webp',
      width: 100,
      height: 40
    },
    {
      name: 'Migros',
      src: '/assets/images/migros-logo.webp',
      width: 100,
      height: 40
    },
    {
      name: 'Hettich',
      src: '/assets/images/hettich-logo.webp',
      width: 120,
      height: 40
    },
    {
      name: 'Peri',
      src: '/assets/images/peri-logo.webp',
      width: 100,
      height: 40
    },
    {
      name: 'Duisport',
      src: '/assets/images/duisport-logo.webp',
      width: 120,
      height: 40
    },
    {
      name: 'Mubea',
      src: '/assets/images/mubea-logo.webp',
      width: 100,
      height: 40
    },
    {
      name: 'Aurubis',
      src: '/assets/images/aurubis-logo.webp',
      width: 100,
      height: 40
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-max">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg">
            Vertrauen von führenden Unternehmen
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} Logo`}
                width={logo.width}
                height={logo.height}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}