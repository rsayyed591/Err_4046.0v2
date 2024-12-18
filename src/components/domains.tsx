'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const domains = [
  {
    title: "Machine Learning",
    description: "Machine Learning Falls Under The Category Of Artificial Intelligence (AI) And Empowers Computers To Acquire Knowledge Without The Need For Explicit Programming. It Centers Around Creating Computer Algorithms That Can Adapt And Evolve Based On New Data They Encounter.",
    icon: "https://cdn-icons-png.flaticon.com/512/8618/8618881.png"
  },
  {
    title: "Web Development",
    description: "Web Development Encompasses The Tasks Associated With Creating Websites For The Internet Or Private Networks. This Can Span From Designing A Basic, Static Web Page With Plain Text To Crafting Intricate Web Applications, Online Businesses, And Social Networking Platforms.",
    icon: "https://cdn-icons-png.flaticon.com/512/2210/2210153.png"
  },
  {
    title: "Cloud Computing",
    description: "Cloud Computing Refers To The Convenient Access To Computer System Resources, Including Data Storage And Processing Capabilities, Without Requiring Direct User Intervention. Typically, It Pertains To The Utilization Of Data Centers That Serve Numerous Users Via The Internet.",
    icon: "https://cdn-icons-png.flaticon.com/512/4215/4215831.png"
  },
  {
    title: "Big Data",
    description: "Big Data Analytics Involves The Exploration Of Extensive And Diverse Datasets, Commonly Referred To As Big Data. Its Aim Is To Discover Concealed Patterns, Unanticipated Connections, Market Trends, Customer Preferences, And Valuable Insights That Enable Organizations To Make Better-Informed Business Choices.",
    icon: "https://cdn-icons-png.flaticon.com/512/6384/6384427.png"
  },
  {
    title: "Networking And Security",
    description: "Network Security Is A Specialized Area Within Computer Networking That Focuses On Safeguarding A Computer Network's Infrastructure. Delve Into The Realm Of Network Security, Where You Can Develop Innovative Products Or Uncover Undiscovered Vulnerabilities. Does The Term ETERNALBLUE Ring A Bell?",
    icon: "https://cdn-icons-png.flaticon.com/512/179/179676.png"
  },
  {
    title: "App Development",
    description: "Mobile App Development Refers To The Creation And Construction Of Mobile Applications Designed For Use On Devices Like Smartphones, Personal Digital Assistants (PDAs), Or Enterprise Digital Assistants.",
    icon: "https://cdn-icons-png.flaticon.com/512/2272/2272704.png"
  }
]

export function Domains() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="domains" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Domains</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, idx) => (
            <Card
              key={domain.title}
              className={cn(
                "group relative overflow-hidden rounded-xl p-8 transition-all duration-500 hover:shadow-2xl",
                hoveredIndex === idx ? "scale-[1.02]" : ""
              )}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Image
                    src={domain.icon}
                    alt={domain.title}
                    width={32}
                    height={32}
                    className="text-primary"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{domain.title}</h3>
                <p className="text-muted-foreground text-sm">{domain.description}</p>
              </div>
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-500",
                  hoveredIndex === idx ? "opacity-100" : ""
                )}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}