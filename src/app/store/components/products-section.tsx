import { pixelFont } from '@/app/fonts'
import { ProductGrid } from './product-grid'

export function ProductsSection() {
  return (
    <div className="bg-background/5 backdrop-blur-sm 
                   rounded-2xl border border-border/50 p-4 sm:p-6 lg:p-8">
      <div className="mb-4 sm:mb-6 lg:mb-8">
        <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight
                      ${pixelFont.className} bg-gradient-to-r from-primary 
                      to-primary/60 bg-clip-text text-transparent`}>
          Featured Products
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground mt-1.5 sm:mt-2">
          Exclusive merchandise coming soon to our store
        </p>
      </div>
      <ProductGrid />
    </div>
  )
} 