'use client'

import { motion } from 'framer-motion'
import { pixelFont } from '@/app/fonts'
import Image from 'next/image'

interface HackathonEvent {
  version: string
  image: string
  description: string
  date: string
  alt: string
}

const hackathons: HackathonEvent[] = [
  {
    version: "Err_404 1.0",
    image: "/images/hackathon/Hackathon1.jpg",
    description: "24 hours offline state level hackathon",
    date: "held in oct 2017",
    alt: "Err_404 1.0 Hackathon Event"
  },
  {
    version: "Err_404 2.0",
    image: "/images/hackathon/Hackathon2.jpg",
    description: "24 hours offline state level hackathon",
    date: "held in mar 2019",
    alt: "Err_404 2.0 Hackathon Event"
  },
  {
    version: "Err_404 3.0",
    image: "/images/hackathon/Hackathon3.jpg",
    description: "24 hours offline state level hackathon",
    date: "held in feb-mar 2020",
    alt: "Err_404 3.0 Hackathon Event"
  },
  {
    version: "Err_404 4.0",
    image: "/images/hackathon/Hackathon4.jpg",
    description: "24 hours virtual international level hackathon",
    date: "held in mar 2021",
    alt: "Err_404 4.0 Hackathon Event"
  },
  {
    version: "Err_404 5.0",
    image: "/images/hackathon/Hackathon5.JPG",
    description: "36 hours offline national level hackathon",
    date: "held in mar 2023",
    alt: "Err_404 5.0 Hackathon Event"
  },
  {
    version: "Err_404 6.0",
    image: "/images/hackathon/Hackathon6.jpg",
    description: "24 hours hackathon",
    date: "will be held in feb",
    alt: "Err_404 6.0 Hackathon Event"
  }
]

function HackathonCard({ hackathon }: { hackathon: HackathonEvent }) {
  return (
    <motion.div 
      className="relative overflow-hidden bg-background border border-border group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={hackathon.image}
          alt={hackathon.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div 
          className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center p-4 text-center opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100"
        >
          <h3 className={`text-1xl font-bold text-white mb-2 transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0 ${pixelFont.className}`}>
            {hackathon.version}
          </h3>
          <span className="block text-zinc-300 mb-1 transform translate-y-4 transition-transform duration-300 delay-75 group-hover:translate-y-0">
            {hackathon.description}
          </span>
          <span className="block text-zinc-400 text-sm transform translate-y-4 transition-transform duration-300 delay-100 group-hover:translate-y-0">
            {hackathon.date}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function HackathonHistory() {
  return (
    <section id="hackathons" className="py-20 px-8">
      <div className="container px-4 mx-auto">
        <h2 className={`text-3xl md:text-5xl font-bold text-center mb-20 ${pixelFont.className}`}>
          Err_404 Hackathon
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {hackathons.map((hackathon) => (
            <HackathonCard key={hackathon.version} hackathon={hackathon} />
          ))}
        </div>
      </div>
    </section>
  )
}

