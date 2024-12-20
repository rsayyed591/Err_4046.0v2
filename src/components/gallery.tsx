'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { pixelFont } from '@/app/fonts'
import { Button } from "@/components/ui/button"
import { PlayCircle, PauseCircle, ZoomIn, ZoomOut, Download, X, Minimize2, Maximize2, LayoutGrid } from 'lucide-react'

const images = [
  {
    src: "/gallery/img1.jpg",
    alt: "Gallery Image 1",
    width: 800,
    height: 600,
    title: "Hackathon 1.0 Winners",
    gridArea: "1 / 1 / 2 / 2"
  },
  {
    src: "/gallery/img2.jpg",
    alt: "Gallery Image 2",
    width: 800,
    height: 800,
    title: "Hackathon 1.0",
    gridArea: "1 / 2 / 2 / 3"
  },
  {
    src: "/gallery/img3.jpg",
    alt: "Gallery Image 3",
    width: 800,
    height: 500,
    title: "Hackathon 2.0",
    gridArea: "1 / 3 / 2 / 4"
  },
  {
    src: "/gallery/img4.JPG",
    alt: "Gallery Image 4",
    width: 1200,
    height: 600,
    title: "Hackathon 3.0",
    gridArea: "2 / 1 / 3 / 2"
  },
  {
    src: "/gallery/img5.jpg",
    alt: "Gallery Image 5",
    width: 800,
    height: 700,
    title: "Hackathon 4.0",
    gridArea: "2 / 2 / 3 / 3"
  },
  {
    src: "/gallery/img6.jpg",
    alt: "Gallery Image 6",
    width: 800,
    height: 600,
    title: "Hackathon 5.0",
    gridArea: "2 / 3 / 3 / 4"
  }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [scale, setScale] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showThumbnails, setShowThumbnails] = useState(true)
  const imageRef = useRef<HTMLDivElement>(null)
  const slideshowIntervalRef = useRef<NodeJS.Timeout>()

  useEffect(() => {
    return () => {
      if (slideshowIntervalRef.current) {
        clearInterval(slideshowIntervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const toggleFullscreen = async () => {
    if (!imageRef.current) return

    try {
      if (!isFullscreen) {
        await imageRef.current.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (err) {
      console.error('Fullscreen error:', err)
    }
  }

  const handleZoom = (direction: 'in' | 'out') => {
    setScale(prev => {
      if (direction === 'in' && prev < 3) return prev + 0.5
      if (direction === 'out' && prev > 1) return prev - 0.5
      return prev
    })
  }

  const toggleSlideshow = () => {
    setIsPlaying(prev => !prev)
    
    if (slideshowIntervalRef.current) {
      clearInterval(slideshowIntervalRef.current)
      slideshowIntervalRef.current = undefined
    }

    if (!isPlaying && selectedImage !== null) {
      slideshowIntervalRef.current = setInterval(() => {
        setSelectedImage(prev => 
          prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
        )
      }, 3000)
    }
  }

  const handleDownload = async (image: typeof images[0]) => {
    try {
      const response = await fetch(image.src)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${image.title}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (err) {
      console.error('Download error:', err)
    }
  }

  const handleClose = () => {
    if (slideshowIntervalRef.current) {
      clearInterval(slideshowIntervalRef.current)
    }
    setSelectedImage(null)
    setScale(1)
    setIsPlaying(false)
  }

  return (
    <section id="gallery" className="py-20 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-5xl font-bold mb-12 md:mb-20 text-center ${pixelFont.className} text-primary`}>
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative cursor-pointer overflow-hidden rounded-lg bg-muted ${
                index === 3 ? 'sm:col-span-2 sm:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 hover:opacity-100">
                <div className="flex h-full items-center justify-center">
                  <p className="text-white text-lg font-medium text-center px-4">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-4"
            onClick={handleClose}
          >
            <div 
              className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={e => e.stopPropagation()}
            >
              <div 
                ref={imageRef}
                className="relative overflow-hidden rounded-lg mb-4"
                style={{
                  width: `${images[selectedImage].width * scale}px`,
                  height: `${images[selectedImage].height * scale}px`,
                  maxWidth: '90vw',
                  maxHeight: isFullscreen ? '100vh' : '70vh',
                }}
              >
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  fill
                  className="object-contain transition-transform duration-300"
                  style={{ transform: `scale(${scale})` }}
                  priority
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 text-white hover:bg-white/20"
                  onClick={handleClose}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2 bg-black/60 backdrop-blur-sm p-2 rounded-full mb-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => setShowThumbnails(!showThumbnails)}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={toggleFullscreen}
                >
                  {isFullscreen ? (
                    <Minimize2 className="h-4 w-4" />
                  ) : (
                    <Maximize2 className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={toggleSlideshow}
                >
                  {isPlaying ? (
                    <PauseCircle className="h-4 w-4" />
                  ) : (
                    <PlayCircle className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => handleZoom('in')}
                  disabled={scale >= 3}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => handleZoom('out')}
                  disabled={scale <= 1}
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/20"
                  onClick={() => handleDownload(images[selectedImage])}
                >
                  <Download className="h-4 w-4" />
                </Button>
              </div>

              {showThumbnails && (
                <div className="flex gap-2 p-2 max-w-full overflow-hidden">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 flex-shrink-0 ${
                        selectedImage === index ? 'ring-2 ring-[#00ffd5]' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(index)
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}