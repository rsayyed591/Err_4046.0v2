'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { pixelFont } from '@/app/fonts'
import { useInView } from 'react-intersection-observer'

function useTypewriter(text: string, duration: number = 2000, startTyping: boolean = false) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    if (!startTyping) return

    const increment = Math.floor(text.length / (duration / 16))
    let currentIndex = 0

    const timer = setInterval(() => {
      if (currentIndex >= text.length) {
        clearInterval(timer)
        return
      }

      currentIndex += increment
      setDisplayText(text.slice(0, Math.min(currentIndex, text.length)))
    }, 16)

    return () => clearInterval(timer)
  }, [text, duration, startTyping])

  return displayText
}

export function About() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const description = `ERR_404 is a nationally recognized two-day Hackathon organized by the Computer Department of Anjuman-I-Islam M.H. Saboo Siddik College of Engineering. Calling all cyber enthusiasts and tech-savvy learners! This is your chance to step forward, seize the opportunity, showcase your exceptional skills, and transform your innovative ideas into reality in a competitive atmosphere. The hackathon places a strong emphasis on developing interpersonal skills such as teamwork, leadership, meticulousness, adaptability, and the ability to brainstorm ideas while successfully creating and executing a functional prototype. Whether you're a first-time hackathon participant or a seasoned veteran with numerous hackathons under your belt, we welcome students of all skill levels and from all colleges to join us for a weekend filled with creativity, collaboration, and coding.`
  
  const displayText = useTypewriter(description, 1900, inView)

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className="py-20" ref={ref}>
      <div className="container px-4 mx-auto">
        <h1 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center ${pixelFont.className}`}>
          About Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ scale: 1.02 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-white shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-4">What is Err_404?</h3>
                <p className="text-muted-foreground text-lg h-full">
                  {displayText}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02 }} 
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="h-full bg-transparent">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-4">Err_404&apos;s Team</h3>
                <motion.div 
                  className="relative h-[300px] rounded-lg overflow-hidden"
                  animate={floatingAnimation}
                >
                  <Image
                    src="/team.jpg"
                    alt="Err_404 Team"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

