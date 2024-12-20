'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Calendar, Users, Trophy, Terminal, Footprints } from 'lucide-react'
import { pixelFont } from '@/app/fonts'

interface TimelineEvent {
  date: string
  title: string
  description: string
  icon: React.ReactNode
  side: 'left' | 'right'
}

const events: TimelineEvent[] = [
  {
    date: "1ST JAN 2025",
    title: "Registration Opens",
    description: "Begin your journey! Register your team and prepare for an epic hackathon experience.",
    icon: <Calendar className="w-6 h-6" />,
    side: 'left'
  },
  {
    date: "13TH JAN 2025",
    title: "Registration Closes",
    description: "Last chance to join! Make sure your team is registered before the deadline.",
    icon: <Users className="w-6 h-6" />,
    side: 'right'
  },
  {
    date: "15TH JAN 2025",
    title: "Final Team Announcement",
    description: "The selected teams will be revealed! Check if your team made it to the main event.",
    icon: <Trophy className="w-6 h-6" />,
    side: 'left'
  },
  {
    date: "18TH JAN 2025",
    title: "Hackathon Begins",
    description: "The main event starts! 36 hours of coding challenges await.",
    icon: <Terminal className="w-6 h-6" />,
    side: 'right'
  },
  {
    date: "19TH JAN 2025",
    title: "Project Submissions",
    description: "Time to showcase your work! Submit your projects for evaluation.",
    icon: <Footprints className="w-6 h-6" />,
    side: 'left'
  }
]

function TimelineCard({ event, index }: { event: TimelineEvent; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [isInView, controls])

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: event.side === 'left' ? -100 : 100
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2
      }
    }
  }

  return (
    <div className="relative mb-16 md:mb-24" ref={ref}>
      <div className="absolute left-4 md:left-[calc(50%_-_6px)] w-3 h-3 bg-zinc-800"></div>
      
      <motion.div
        initial="hidden"
        animate={controls}
        variants={cardVariants}
        className={`
          ${event.side === 'left' ? 'md:mr-[calc(50%_+_2rem)]' : 'md:ml-[calc(50%_+_2rem)]'}
          bg-background border border-border p-6 max-w-xl mx-0
          hover:border-primary/50 transition-colors duration-300
          w-[calc(100%-1rem)] md:w-auto ml-4 md:mx-0
        `}
      >
        <div className="flex items-start gap-4">
          <div className="p-2 bg-muted text-primary">
            {event.icon}
          </div>
          <div>
            <div className={`text-xl text-primary mb-2 ${pixelFont.className}`}>
              {event.date}
            </div>
            <h2 className="text-xl font-bold text-foreground mb-2">
              {event.title}
            </h2>
            <p className="text-muted-foreground text-sm">
              {event.description}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-20">
      <div className="max-w-5xl mx-auto px-4 overflow-x-hidden">
        <h1 className={`text-3xl md:text-5xl font-bold mb-16 md:mb-24 text-center ${pixelFont.className}`}>
          SCHEDULE
        </h1>
        
        <div className="relative">
          {/* Timeline path */}
          <div className="absolute left-[50%] top-0 h-full hidden md:block">
            <div className="absolute left-[-1px] w-[2px] h-full border-l-2 border-dashed border-zinc-400"></div>
          </div>

          {/* Add a vertical line for mobile */}
          <div className="absolute left-4 top-0 h-full md:hidden">
            <div className="absolute left-[-1px] w-[2px] h-full border-l-2 border-dashed border-zinc-400"></div>
          </div>

          {/* Timeline events */}
          <div className="relative">
            {events.map((event, index) => (
              <TimelineCard key={index} event={event} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

