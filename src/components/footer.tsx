'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Facebook } from 'lucide-react'

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Image
              src="/logo.png"
              alt="Programmers' Club Logo"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground max-w-xs">
              Transforming Skills, Inspiring Innovation, and Creating Tomorrow's Trailblazers.
            </p>
            <div className="flex space-x-4">
              <Link href="https://instagram.com" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('domains')}
                  className="text-muted-foreground hover:text-primary"
                >
                  Domains
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('timeline')}
                  className="text-muted-foreground hover:text-primary"
                >
                  Timeline
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                programmersclub@mhssce.ac.in
              </li>
              <li className="text-muted-foreground">
                hackathon_err404@mhssce.ac.in
              </li>
              <li className="text-muted-foreground">
                M.H. Saboo Siddik College of Engineering, Mumbai - 400008
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2024 Err_404. All rights reserved.</p>
          <p>Designed by Programmers' Club</p>
        </div>
      </div>
    </footer>
  )
}