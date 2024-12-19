'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { pixelFont } from '@/app/fonts'
const domains = [
  {
    title: "Machine Learning",
    icon: "https://cdn-icons-png.flaticon.com/512/8618/8618881.png",
  },
  {
    title: "Web Development",
    icon: "https://cdn-icons-png.flaticon.com/512/2210/2210153.png",
  },
  {
    title: "Cloud Computing",
    icon: "https://cdn-icons-png.flaticon.com/512/4215/4215831.png",
  },
  {
    title: "Blockchain",
    icon: "/blockchain.jpg",
  },
  {
    title: "Cyber Security",
    icon: "/cyber.jpg",
  },
  {
    title: "App Development",
    icon: "https://cdn-icons-png.flaticon.com/512/2272/2272704.png",
  }
]

export function Domains() {
  return (
    <section id="domains" className="py-20">
      <div className="container px-4 mx-auto">
        <h1 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center ${pixelFont.className}`}>
                  Domains
                </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <motion.div
              key={domain.title}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Image
                        src={domain.icon}
                        alt={domain.title}
                        width={40}
                        height={40}
                        className="text-primary"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold text-center">{domain.title}</h3>
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

