import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Countdown } from '@/components/countdown'
import { Footer } from '@/components/footer'
import { ShootingStarBackground } from '@/components/shooting-stars'

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <ShootingStarBackground />
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <Countdown />
      <Footer />
    </main>
  )
}