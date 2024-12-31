'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Instagram, Linkedin, Facebook, Twitter } from 'lucide-react'

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
              Transforming Skills, Inspiring Innovation, and Creating Tomorrow&apos;s Trailblazers.
            </p>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/err404mhss" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/err_404hack" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/err404hackathon" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://www.linkedin.com/in/programmersclubmhssce" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://discord.gg/yxPfHasURU" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M9 7.5V9h6V7.5c0-.28-.22-.5-.5-.5h-5c-.28 0-.5.22-.5.5z"/>
                  <path d="M18 10c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-7z"/>
                  <path d="M10 14h4"/>
                  <path d="M10 12h4"/>
                </svg>
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
                <a href="mailto:programmersclub@mhssce.ac.in" className="hover:text-primary">
                  programmersclub@mhssce.ac.in
                </a>
              </li>
              <li className="text-muted-foreground">
                <a href="mailto:hackathon_err404@mhssce.ac.in" className="hover:text-primary">
                  hackathon_err404@mhssce.ac.in
                </a>
              </li>
              <li className="text-muted-foreground">
                M.H. Saboo Siddik College of Engineering, Mumbai - 400008
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2024 Err_404. All rights reserved.</p>
          <p>Designed by Programmers&apos; Club</p>
        </div>
      </div>
    </footer>
  )
}

