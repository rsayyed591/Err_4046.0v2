'use client'

import { useEffect, useState } from 'react'
import { pixelFont } from '@/app/fonts'

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date('2025-02-15T00:00:00')

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container px-4 mx-auto text-center">
        <h2 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center ${pixelFont.className}`}>
        Time is Running Out,<br /> Code Warriors Assemble!
                </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { label: 'DAYS', value: timeLeft.days },
            { label: 'HOURS', value: timeLeft.hours },
            { label: 'MINUTES', value: timeLeft.minutes },
            { label: 'SECONDS', value: timeLeft.seconds }
          ].map(({ label, value }) => (
            <div key={label} className="relative">
              <div className="w-32 h-32 mx-auto relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    className="stroke-muted stroke-1 fill-none"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    className="stroke-gray-600 stroke-2 fill-none"
                    style={{
                      strokeDasharray: '377',
                      strokeDashoffset: '0',
                      filter: 'drop-shadow(0 0 6px #22d3ee)'
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-600">{value}</span>
                </div>
              </div>
              <span className="block mt-4 text-sm font-medium text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

