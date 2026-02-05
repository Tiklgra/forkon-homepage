'use client';

import Image from 'next/image';
import {motion} from 'framer-motion';

export default function LogoGrid() {
  const logos = [
    {
      name: 'Coca Cola',
      src: '/assets/images/67d3a65a41cfe3a157148b95_coca%20cola.webp',
      width: 120,
      height: 40
    },
    {
      name: 'Deutsche Bahn',
      src: '/assets/images/684135934103dc81904c6604_db%20logo.webp',
      width: 100,
      height: 40
    },
    {
      name: 'Migros',
      src: '/assets/images/684135a604b1f829c63d8830_Migros.webp',
      width: 100,
      height: 40
    },
    {
      name: 'Hettich',
      src: '/assets/images/684135b8230201cac94abb4d_Hettich-Logo.webp',
      width: 120,
      height: 40
    },
    {
      name: 'Peri',
      src: '/assets/images/684137f13abecd32b1f2f68f_peri-removebg-preview.webp',
      width: 100,
      height: 40
    },
    {
      name: 'Duisport',
      src: '/assets/images/6841365be44f6e7d076093c4_duisport_logo_blue.webp',
      width: 120,
      height: 40
    },
    {
      name: 'Mubea',
      src: '/assets/images/67d3a6593de40a49b1a8f68e_mubea.webp',
      width: 100,
      height: 40
    },
    {
      name: 'Aurubis',
      src: '/assets/images/6841386c2fe43452c523cc1c_aurubis-logo.webp',
      width: 100,
      height: 40
    }
  ];

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-max">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-12"
        >
          <p className="text-gray-600 text-lg">
            Vertrauen von führenden Unternehmen
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{opacity: 0, scale: 0.8}}
              whileInView={{opacity: 1, scale: 1}}
              viewport={{once: true}}
              transition={{duration: 0.4, delay: index * 0.1}}
              className="flex justify-center items-center h-16 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={`${logo.name} Logo`}
                width={logo.width}
                height={logo.height}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}