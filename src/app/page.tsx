import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Domains } from '@/components/domains'
import { Countdown } from '@/components/countdown'
import { Footer } from '@/components/footer'
import { AnimatedGridBackground } from '@/components/animated-grid'
import Timeline from '@/components/timeline'
import HackathonHistory from '@/components/hackathon-history'
import FAQ from '@/components/faq'
import Guidelines from '@/components/guidelines'
import Gallery from '@/components/gallery'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedGridBackground />
      <div className="relative z-10">
        <Navbar />
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <Countdown />
        <Domains />
        <HackathonHistory />
        <Timeline />
        <Guidelines />
        <Gallery />
        <FAQ />
        <Footer />
      </div>
    </main>
  )
}

