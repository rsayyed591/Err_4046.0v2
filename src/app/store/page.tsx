import { Footer } from '@/components/footer'
import { StoreHeader } from './components/store-header'
import { StoreBanner } from './components/store-banner'
import { ProductsSection } from './components/products-section'

export default function StorePage() {
  return (
    <main className="relative min-h-screen pt-8">
      <div className="relative z-10">
        <StoreHeader />
        
        {/* Main Content Container */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl 
                       mt-20 sm:mt-18 lg:mt-20 mb-12 space-y-6 sm:space-y-8">
          <StoreBanner />
          <ProductsSection />
        </div>

        <Footer />
      </div>
    </main>
  )
}
