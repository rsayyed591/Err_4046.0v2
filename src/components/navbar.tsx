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
import { DevfolioButton } from './devfolio-button'
import { useState } from 'react'

export function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false)
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
            alt="Err_404 Logo"
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
                className={cn(navigationMenuTriggerStyle(), "hover-underline-animation")}
              >
                About
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('domains')}
                className={cn(navigationMenuTriggerStyle(), "hover-underline-animation")}
              >
                Domains
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('hackathons')}
                className={cn(navigationMenuTriggerStyle(), "hover-underline-animation")}
              >
                Hackathons
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/ps" className={cn(navigationMenuTriggerStyle(), "hover-underline-animation")}>
                PS
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <button
                onClick={() => scrollToSection('timeline')}
                className={cn(navigationMenuTriggerStyle(), "hover-underline-animation")}
              >
                Timeline
              </button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover-underline-animation">More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {[
                    { title: "Guidelines", sectionId: "guidelines", description: "Event rules and regulations" },
                    { title: "Gallery", sectionId: "gallery", description: "Photos from past events" },
                    { title: "FAQ", sectionId: "faq", description: "Frequently asked questions" },
                    { title: "Contact", sectionId: "contact", description: "Get in touch with us" },
                  ].map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      onClick={() => {
                        scrollToSection(item.sectionId)
                        setSheetOpen(false)
                      }}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => {
                  scrollToSection('about')
                  setSheetOpen(false)
                }}
                className="text-foreground hover:text-primary text-left"
              >
                About
              </button>
              <button
                onClick={() => {
                  scrollToSection('domains')
                  setSheetOpen(false)
                }}
                className="text-foreground hover:text-primary text-left"
              >
                Domains
              </button>
              <button
                onClick={() => {
                  scrollToSection('hackathons')
                  setSheetOpen(false)
                }}
                className="text-foreground hover:text-primary text-left"
              >
                Hackathons
              </button>
              <Link href="/ps" className="text-foreground hover:text-primary text-left">
                PS
              </Link>
              <button
                onClick={() => {
                  scrollToSection('timeline')
                  setSheetOpen(false)
                }}
                className="text-foreground hover:text-primary text-left"
              >
                Timeline
              </button>
              <details>
                <summary className="text-foreground hover:text-primary cursor-pointer">More</summary>
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  <button
                    onClick={() => {
                      scrollToSection('guidelines')
                      setSheetOpen(false)
                    }}
                    className="text-foreground hover:text-primary text-left"
                  >
                    Guidelines
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('gallery')
                      setSheetOpen(false)
                    }}
                    className="text-foreground hover:text-primary text-left"
                  >
                    Gallery
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('faq')
                      setSheetOpen(false)
                    }}
                    className="text-foreground hover:text-primary text-left"
                  >
                    FAQ
                  </button>
                  <button
                    onClick={() => {
                      scrollToSection('contact')
                      setSheetOpen(false)
                    }}
                    className="text-foreground hover:text-primary text-left"
                  >
                    Contact
                  </button>
                </div>
              </details>
            </nav>
          </SheetContent>
        </Sheet>

        <div className="hidden lg:block">
          <DevfolioButton />
        </div>

      </div>
    </header>
  )
}
  
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { onClick?: () => void }
>
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
(({ className, title, children, onClick, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <button
          type="button"
          onClick={onClick}
          className={cn(
            "block w-full text-left select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </button>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

