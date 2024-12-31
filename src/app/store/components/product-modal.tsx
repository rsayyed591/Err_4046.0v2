'use client'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Image from "next/image"
import { pixelFont } from "@/app/fonts"
import { Product } from "./product-grid"

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  if (!product) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl mx-auto bg-white backdrop-blur-xl 
                               border-border/50 rounded-lg shadow-2xl p-4 sm:p-6">
        <DialogTitle className="sr-only">
          {product.name} Details
        </DialogTitle>
        
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2">
          {/* Image Section */}
          <div className="relative aspect-square bg-gradient-to-b from-white/50 to-white/30 
                         rounded-lg overflow-hidden w-full max-w-md mx-auto sm:mx-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-contain p-4 sm:p-6"
            />
            {product.isNew && (
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 backdrop-blur-md 
                            bg-primary/90 text-primary-foreground px-2 sm:px-3 py-1 
                            rounded-full text-xs font-medium">
                New Release
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className={`${pixelFont.className} text-xl sm:text-2xl font-bold tracking-tight 
                          bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent`}>
              {product.name}
            </h2>

            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-bold text-black">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm sm:text-base text-muted-foreground/80 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <div className="text-xs sm:text-sm text-primary font-medium">
                  Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                </div>
              )}
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="font-semibold text-primary/90 text-sm sm:text-base">Description</h3>
              <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-1.5 sm:space-y-2">
              <h3 className="font-semibold text-primary/90 text-sm sm:text-base">Details</h3>
              <ul className="text-xs sm:text-sm text-muted-foreground/90 space-y-1 sm:space-y-1.5">
                <li className="flex items-center gap-2">
                  <span className="text-primary/60">•</span>
                  Material: {product.details.material}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary/60">•</span>
                  Style: {product.details.style}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary/60">•</span>
                  Care: {product.details.care}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary/60">•</span>
                  {product.details.origin}
                </li>
              </ul>
            </div>

            <button 
              disabled
              className="w-full px-3 sm:px-4 py-2 rounded-lg bg-primary/10 text-primary/90
                       hover:bg-primary/20 transition-colors text-xs sm:text-sm font-medium 
                       shadow-sm cursor-not-allowed mt-3 sm:mt-4 border border-primary/20"
            >
              Coming Soon
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 