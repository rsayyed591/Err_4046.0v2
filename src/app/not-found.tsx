'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { pixelFont } from '@/app/fonts'

export default function NotFound() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const dinoVariants = {
    idle: {
      y: [0, -10, 0],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    },
    follow: {
      x: position.x - 10,
      y: position.y - 10,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 200
      }
    }
  }

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center relative overflow-hidden">
      <motion.div
        className="z-10 absolute"
        initial="idle"
        animate="follow"
        variants={dinoVariants}
      >
        <Image
          src="/trex.png"
          alt="Pixel Dinosaur"
          width={50}
          height={50}
          className="select-none"
        />
      </motion.div>

      <motion.h1 
        className={`text-6xl md:text-8xl font-bold mb-8 ${pixelFont.className} text-black`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>

      <motion.p 
        className="text-xl md:text-2xl mb-8 text-center max-w-md text-gray-700"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Oops! Looks like this page got eaten by a hungry dino.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link href="/">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-black text-white hover:bg-gray-800 transition-colors"
          >
            Go Back Home
          </Button>
        </Link>
      </motion.div>

      <div className="absolute bottom-4 left-4 right-4 text-center text-gray-500">
        <p>Try moving your mouse or finger around to play with the dino!</p>
      </div>
    </div>
  )
}

