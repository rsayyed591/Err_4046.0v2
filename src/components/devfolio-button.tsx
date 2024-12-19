'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Code2 } from 'lucide-react'

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
      data-button-theme="light"
      style={{ height: '44px', width: '312px' }}
    >
      <Button className="w-full h-full bg-blue-600 hover:bg-blue-700 text-lg gap-2">
        <Code2 className="h-5 w-5" />
        Apply with Devfolio
      </Button>
    </div>
  )
}
