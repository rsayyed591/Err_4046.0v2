'use client'

import { useEffect } from 'react'

export function DevfolioButton() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://apply.devfolio.co/v2/sdk.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div 
      className="apply-button" 
      data-hackathon-slug="err-11" 
      data-button-theme="dark-inverted"
      style={{ height: '44px', width: '312px' }}
    ></div>
  )
}
