import Link from 'next/link'
import { cn } from "@/lib/utils"
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'

export function StoreHeader() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm 
                   border-b border-border h-20 flex items-center px-4">
      <Link href="/" className={cn(navigationMenuTriggerStyle(), "hover-underline-animation")}>
            Go back to Err_404
      </Link>
    </div>
  )
} 