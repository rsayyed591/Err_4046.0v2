import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { TypedText } from './typed-text'
import { pixelFont } from '@/app/fonts'

export function Hero() {
  const typedStrings = [
    'Win awesome prizes',
    'On 18 January - 19 January',
    'Build amazing projects',
    'Network with peers'
  ]

  return (
    <div className="min-h-screen flex items-center pt-32 lg:pt-16">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-primary ${pixelFont.className}`}>
              Err_404 6.0
            </h1>
            <div className="text-2xl sm:text-3xl lg:text-4xl text-primary">
              <TypedText strings={typedStrings} />
            </div>
            <p className="text-lg text-muted-foreground max-w-xl">
              Join us on 18th and 19th of January 2025 for 36 hours of creation, innovation, & fun with
              over 500+ students.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              Register
            </Button>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/dinosaur.gif"
              alt="HackNiche Illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}