// import { pixelFont } from "@/app/fonts"
import TeamsList from "./components/TeamsList"
import { AnimatedGridBackground } from "@/components/animated-grid";
import Link from 'next/link'
import { cn } from "@/lib/utils"
import {
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function TeamsPage() {
  return (

<main className="relative min-h-screen pt-8">
<AnimatedGridBackground />
<div className="relative z-10">
  <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border h-20 flex items-center justify-between px-4">
    <Link href="/" className={cn(navigationMenuTriggerStyle(), "hover-underline-animation")}>
      Go back to Err_404
    </Link>
  </div>
  {/* <h1 className={`text-3xl md:text-5xl font-bold mb-12 ${pixelFont.className}`}>
          Selected Teams Ready for Battle!
        </h1> */}
        <TeamsList />
</div>
</main>
  )
}

