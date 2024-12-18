'use client'

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    class ShootingStar {
      x!: number
      y!: number
      length!: number
      speed!: number
      angle!: number
      opacity!: number

      constructor() {
        this.reset()
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = 0
        this.length = Math.random() * 80 + 20
        this.speed = Math.random() * 10 + 5
        this.angle = Math.PI / 4 // 45 degrees
        this.opacity = Math.random() * 0.8 + 0.2
      }

      draw() {
        if (!ctx) return

        ctx.strokeStyle = `rgba(200, 200, 200, ${this.opacity})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(this.x, this.y)
        const endX = this.x + Math.cos(this.angle) * this.length
        const endY = this.y + Math.sin(this.angle) * this.length
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Draw glow effect
        const gradient = ctx.createLinearGradient(
          this.x, this.y,
          endX, endY
        )
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`)
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')
        ctx.strokeStyle = gradient
        ctx.lineWidth = 4
        ctx.stroke()
      }

      update() {
        this.x += this.speed * Math.cos(this.angle)
        this.y += this.speed * Math.sin(this.angle)

        if (this.y > canvas.height || this.x > canvas.width) {
          this.reset()
        }
      }
    }

    const stars: ShootingStar[] = Array.from({ length: 20 }, () => new ShootingStar())

    function animate() {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      stars.forEach(star => {
        star.draw()
        star.update()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-white"
    />
  )
}

