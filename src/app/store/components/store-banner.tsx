import { pixelFont } from '@/app/fonts'

export function StoreBanner() {
  return (
    <div className="w-full bg-background/5 backdrop-blur-sm 
                   rounded-2xl border border-border/50 overflow-hidden">
      <div className="px-4 sm:px-6 lg:px-8 py-8 text-center relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative">
          <h1 className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold 
                        tracking-tight leading-tight sm:leading-tight md:leading-tight
                        mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-primary 
                        via-primary/80 to-secondary bg-clip-text text-transparent 
                        ${pixelFont.className}`}>
            Hackathon Swag Store
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground 
                       max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Level up your hacker style with our exclusive merchandise. 
            From comfy hoodies to tech accessories, show off your coding pride!
          </p>
        </div>
      </div>
    </div>
  )
} 