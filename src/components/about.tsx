'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { useInView } from 'react-intersection-observer'

export function About() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Us</h2>
        <div className="grid gap-6">
          {/* Top row - Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              number={6}
              label="Domains"
            />
            <StatCard
              number={35}
              label="Hours of Creation"
            />
            <StatCard
              number={500}
              label="Participants"
            />
          </div>

          {/* Bottom row - About and Team */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-accent/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">What is Err_404?</h3>
                <p className="text-muted-foreground">
                  ERR_404 is a nationally recognized two-day Hackathon organized by
                  the Computer Department of Anjuman-I-Islam M.H. Saboo Siddik
                  College of Engineering. Calling all cyber enthusiasts and tech-savvy
                  learners! This is your chance to step forward, seize the opportunity,
                  showcase your exceptional skills, and transform your innovative ideas
                  into reality in a competitive atmosphere. The hackathon places a
                  strong emphasis on developing interpersonal skills such as
                  teamwork, leadership, meticulousness, adaptability, and the ability to
                  brainstorm ideas while successfully creating and executing a
                  functional prototype. Whether you&apos;re a first-time hackathon
                  participant or a seasoned veteran with numerous hackathons under
                  your belt, we welcome students of all skill levels and from all colleges
                  to join us for a weekend filled with creativity, collaboration, and
                  coding.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-accent/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Err_404&apos;s Team</h3>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/team.jpg"
                    alt="Err_404 Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ number, label }: { number: number; label: string }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = number
      const duration = 2000
      const increment = Math.ceil(end / (duration / 16))

      const timer = setInterval(() => {
        start += increment
        if (start > end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, number])

  return (
    <Card className="bg-accent/50" ref={ref}>
      <CardContent className="p-6">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold">{count}{number > count ? '+' : ''}+</h3>
          <p className="text-muted-foreground text-lg">{label}</p>
        </div>
      </CardContent>
    </Card>
  )
}

