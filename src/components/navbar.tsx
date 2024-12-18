'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Navbar() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border h-20">
      <div className="container flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="HackNiche Logo"
            width={180}
            height={50}
            className="h-16 w-auto"
          />
        </Link>

        <NavigationMenu className="hidden lg:flex text-lg">
          <NavigationMenuList>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('about')}
                className={navigationMenuTriggerStyle()}
              >
                About
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('domains')}
                className={navigationMenuTriggerStyle()}
              >
                Domains
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('hackathons')}
                className={navigationMenuTriggerStyle()}
              >
                Hackathons
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('contact')}
                className={navigationMenuTriggerStyle()}
              >
                Contact
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('timeline')}
                className={navigationMenuTriggerStyle()}
              >
                Timeline
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {[
                    { title: "Guidelines", href: "/guidelines", description: "Event rules and regulations" },
                    { title: "Gallery", href: "/gallery", description: "Photos from past events" },
                    { title: "FAQ", href: "/faq", description: "Frequently asked questions" },
                    { title: "Contact", href: "/contact", description: "Get in touch with us" },
                  ].map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link href="/about" className="text-foreground hover:text-primary">
                About
              </Link>
              <Link href="/domains" className="text-foreground hover:text-primary">
                Domains
              </Link>
              <Link href="/hackathons" className="text-foreground hover:text-primary">
                Hackathons
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary">
                Contact
              </Link>
              <Link href="/timeline" className="text-foreground hover:text-primary">
                Timeline
              </Link>
              <details>
                <summary className="text-foreground hover:text-primary cursor-pointer">More</summary>
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  <Link href="/guidelines" className="text-foreground hover:text-primary">
                    Guidelines
                  </Link>
                  <Link href="/gallery" className="text-foreground hover:text-primary">
                    Gallery
                  </Link>
                  <Link href="/faq" className="text-foreground hover:text-primary">
                    FAQ
                  </Link>
                  <Link href="/contact" className="text-foreground hover:text-primary">
                    Contact
                  </Link>
                </div>
              </details>
            </nav>
          </SheetContent>
        </Sheet>

        <Button className="hidden lg:inline-flex text-lg px-6 py-2">
          Register
        </Button>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"