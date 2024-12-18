'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

interface TypedTextProps {
  strings: string[]
  className?: string
}

export function TypedText({ strings, className }: TypedTextProps) {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      backDelay: 1000,
    })

    return () => {
      typed.destroy()
    }
  }, [strings])

  return <span ref={el} className={className} />
}

