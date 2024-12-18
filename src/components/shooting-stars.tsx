'use client'

import { cn } from "@/lib/utils"

export const ShootingStarBackground = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "fixed inset-0 overflow-hidden -z-10",
        className
      )}
    >
      <div className="relative w-full h-full bg-white">
        <div className="absolute inset-0">
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
          <div className="shooting-star" />
        </div>
        {children}
      </div>
    </div>
  )
}

