import { AnimatedGridBackground } from '@/components/animated-grid'

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="relative">
      <AnimatedGridBackground />
      {children}
    </div>
  )
}