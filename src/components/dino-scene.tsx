'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { pixelFont } from '@/app/fonts'

const messages = [
  "Hackathon starts at 15th Feb!",
  "Innovations roar, errors no more!",
  "Registration now open!",
  "Join us for 36 hours of coding!",
  "Build. Learn. Win!"
]

export function DinoScene() {
  const [currentMessage, setCurrentMessage] = useState(0)
  const [showMessage, setShowMessage] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(false)
      setTimeout(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length)
        setShowMessage(true)
      }, 500)
    }, 4000)

    return () => clearInterval(interval)
  }, []) // Empty dependency array

  return (
    <div className="relative w-full h-full pt-8 md:pt-0">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src="/ChromeDino.png"
          alt="Chrome Dino Scene"
          fill
          className="object-contain object-center md:object-top"
          priority
        />
      </div>

      {/* Pixel Art Speech Bubble */}
      <AnimatePresence>
        {showMessage && (
          <motion.div 
            className="absolute top-[5%] left-[50%] md:top-[13%] md:left-[55%] max-w-[200px] md:max-w-[300px] z-[-1]"
            initial={{ scale: 0, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0, opacity: 0, y: -50 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          >
            <div className="relative">
              <div className={`
                bg-white 
                border-4 border-gray-800
                p-4
                relative
                before:content-['']
                before:absolute
                before:bottom-[-20px]
                before:left-[10px]
                before:w-5
                before:h-5
                before:bg-white
                before:border-l-4
                before:border-b-4
                before:border-gray-800
                after:content-['']
                after:absolute
                after:bottom-[-30px]
                after:left-[0px]
                after:w-5
                after:h-5
                after:bg-white
                after:border-l-4
                after:border-b-4
                after:border-gray-800
              `}>
                <motion.p
                  key={currentMessage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-sm md:text-base text-gray-800 ${pixelFont.className}`}
                  style={{ wordBreak: 'break-word' }}
                >
                  {messages[currentMessage]}
                </motion.p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

