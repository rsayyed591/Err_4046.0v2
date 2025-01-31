'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { pixelFont } from '@/app/fonts'
import { AnimatedGridBackground } from '@/components/animated-grid'

const domains = [
  {
    title: "Machine Learning",
    icon: "/icons/machineLearning.png",
  },
  {
    title: "Web Development",
    icon: "/icons/webDev.png",
  },
  {
    title: "Blockchain",
    icon: "/icons/blockchain.png",
  },
  {
    title: "Cyber Security",
    icon: "/icons/cyberSec.png",
  },
  {
    title: "App Development",
    icon: "/icons/appDev.png",
  }
]

const cardVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

export function Domains() {
  return (
    <section id="domains" className="py-20">
      <div className="container px-4 mx-auto">
        <h1 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center ${pixelFont.className} text-primary`}>
          Domains
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <motion.div
              key={domain.title}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              className="overflow-hidden"
            >
              <Card className="relative overflow-hidden backdrop-blur-sm border-primary/20">
                <div className="absolute inset-0">
                  <AnimatedGridBackground />
                </div>
                <CardContent className="p-6 relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4 h-24 w-24">
                      <Image
                        src={domain.icon}
                        alt={domain.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-center text-primary">{domain.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

