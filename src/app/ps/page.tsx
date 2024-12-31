import { AnimatedGridBackground } from "@/components/animated-grid";
import Link from 'next/link'
import { cn } from "@/lib/utils"
import ProblemStatements from "@/components/ProblemStatement";
import {
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
export default function Home() {
  return (
    <main className="relative min-h-screen pt-8">
      <AnimatedGridBackground />
      <div className="relative z-10">
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border h-20 flex items-center justify-between px-4">
          <Link href="/" className={cn(navigationMenuTriggerStyle(), "hover-underline-animation")}>
            Go back to Err_404
          </Link>
        </div>
        <ProblemStatements />
      </div>
    </main>
  )
}

