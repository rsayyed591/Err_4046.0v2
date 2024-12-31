'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { pixelFont } from '@/app/fonts'

interface Prize {
  id: string
  position: string
  amount: number
  trophy: string
}

const prizes: Prize[] = [
  {
    id: '1',
    position: '1st',
    amount: 40000,
    trophy: '/images/prizes/gold-podium.png'
  },
  {
    id: '2',
    position: '2nd',
    amount: 25000,
    trophy: '/images/prizes/silver-podium.png'
  },
  {
    id: '3',
    position: '3rd',
    amount: 10000,
    trophy: '/images/prizes/bronze-podium.png'
  }
]

const bestApproach = {
  id: '4',
  position: 'Best Approach',
  amount: 5000,
  trophy: '/images/prizes/special-podium.png'
}

export function PrizeGrid() {
  return (
    <div className="space-y-12 sm:space-y-16">
      {/* Header */}
      <h2 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center ${pixelFont.className}`}>
        Prizes
      </h2>
      
      {/* Main Prizes */}
      <div className="flex flex-col sm:grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-12 max-w-sm sm:max-w-4xl lg:max-w-5xl mx-auto">
        {/* First Prize - Shown first on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sm:col-start-2 order-1 sm:order-2"
        >
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 group sm:-mt-8">
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src={prizes[0].trophy}
                alt="Gold Trophy"
                width={220}
                height={280}
                className="mx-auto w-[160px] sm:w-[180px] lg:w-[220px] h-auto drop-shadow-[0_0_35px_rgba(234,179,8,0.3)]"
              />
            </motion.div>
            <div className="space-y-2 sm:space-y-3">
              <div className={`${pixelFont.className} text-3xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-300 
                              bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:via-yellow-500 group-hover:to-yellow-400 
                              transition-all duration-500 transform group-hover:scale-105`}>
                {prizes[0].amount.toLocaleString()}
              </div>
              <div className="text-yellow-500 font-semibold tracking-wide text-sm sm:text-base lg:text-lg">First Prize</div>
            </div>
          </div>
        </motion.div>

        {/* Second Prize */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="sm:col-start-1 sm:self-end order-2 sm:order-1"
        >
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 group">
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src={prizes[1].trophy}
                alt="Silver Trophy"
                width={180}
                height={220}
                className="mx-auto w-[140px] sm:w-[140px] lg:w-[180px] h-auto drop-shadow-[0_0_25px_rgba(148,163,184,0.2)]"
              />
            </motion.div>
            <div className="space-y-2 sm:space-y-3">
              <div className={`${pixelFont.className} text-2xl sm:text-2xl lg:text-3xl bg-gradient-to-r from-slate-100 via-slate-300 to-slate-200 
                              bg-clip-text text-transparent group-hover:from-slate-200 group-hover:via-slate-400 group-hover:to-slate-300 
                              transition-all duration-500 transform group-hover:scale-105`}>
                {prizes[1].amount.toLocaleString()}
              </div>
              <div className="text-slate-400 font-semibold tracking-wide text-sm sm:text-base lg:text-base">Second Prize</div>
            </div>
          </div>
        </motion.div>

        {/* Third Prize */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="sm:col-start-3 sm:self-end order-3"
        >
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 group">
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src={prizes[2].trophy}
                alt="Bronze Trophy"
                width={160}
                height={200}
                className="mx-auto w-[120px] sm:w-[120px] lg:w-[160px] h-auto drop-shadow-[0_0_25px_rgba(217,119,6,0.2)]"
              />
            </motion.div>
            <div className="space-y-2 sm:space-y-3">
              <div className={`${pixelFont.className} text-xl sm:text-xl lg:text-2xl bg-gradient-to-r from-amber-200 via-amber-400 to-amber-300 
                              bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-amber-500 group-hover:to-amber-400 
                              transition-all duration-500 transform group-hover:scale-105`}>
                {prizes[2].amount.toLocaleString()}
              </div>
              <div className="text-amber-600 font-semibold tracking-wide text-sm sm:text-base lg:text-base">Third Prize</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Best Approach Prize */}
      <div className="max-w-xs mx-auto pt-4 sm:pt-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 group">
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src={bestApproach.trophy}
                alt="Special Trophy"
                width={140}
                height={180}
                className="mx-auto w-[100px] sm:w-[120px] lg:w-[140px] h-auto drop-shadow-[0_0_25px_rgba(59,130,246,0.2)]"
              />
            </motion.div>
            <div className="space-y-2 sm:space-y-3">
              <div className={`${pixelFont.className} text-xl sm:text-xl lg:text-2xl bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 
                              bg-clip-text text-transparent group-hover:from-blue-400 group-hover:via-blue-500 group-hover:to-blue-400 
                              transition-all duration-500 transform group-hover:scale-105`}>
                Best Approach
              </div>
              <div className={`${pixelFont.className} text-lg sm:text-lg lg:text-xl bg-gradient-to-r from-blue-200 via-blue-400 to-blue-300 
                              bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-blue-500 group-hover:to-blue-400 
                              transition-all duration-500`}>
                {bestApproach.amount.toLocaleString()}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 