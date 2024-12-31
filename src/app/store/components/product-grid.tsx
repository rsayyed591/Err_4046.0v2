'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { pixelFont } from '@/app/fonts'
import { ProductModal } from './product-modal'

export interface Product {
  id: string
  name: string
  image: string
  price: number
  originalPrice?: number
  category: string
  isNew?: boolean
  description?: string
  details: {
    material: string
    style: string
    care: string
    origin: string
  }
}

const products = [
  {
    id: '1',
    name: 'Err_404 Hoodie',
    image: '/images/store/hoodie.png',
    price: 499,
    originalPrice: 999,
    category: 'Hoodies',
    isNew: true,
    description: 'Stay cozy while coding with our premium Err_404 hoodie. Features the iconic Err_404 logo and is perfect for those late-night hackathon sessions.',
    details: {
      material: 'Premium Cotton Blend',
      style: 'Unisex',
      care: 'Machine wash cold',
      origin: 'Made in India'
    }
  },
]

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-gradient-to-b from-card/50 to-card rounded-2xl 
                       overflow-hidden border border-border/50 hover:border-border/80 
                       transition-all duration-300 hover:shadow-lg hover:shadow-primary/5
                       cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            {/* Image Container */}
            <div className="relative aspect-square bg-white/50 group-hover:bg-white/80 transition-colors">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 3}
                className="object-contain p-6 transition-all duration-300 group-hover:scale-105"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 backdrop-blur-md bg-primary/90 text-primary-foreground 
                                px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                  New Release
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 bg-gradient-to-b from-transparent to-card/80">
              <h3 className={`${pixelFont.className} text-lg font-semibold tracking-tight 
                            bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent`}>
                {product.name}
              </h3>
              
              <div className="flex items-center justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.originalPrice && (
                    <div className="text-xs text-primary font-medium">
                      Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                    </div>
                  )}
                </div>
                
                <button 
                  disabled
                  className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-colors text-sm font-medium shadow-sm cursor-not-allowed"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <ProductModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  )
}
