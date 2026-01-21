'use client'

import { useEffect, useState } from 'react'

export function DotScreenShaderWrapper() {
  const [mounted, setMounted] = useState(false)
  const [ShaderComponent, setShaderComponent] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    setMounted(true)
    // Lazy load the shader component only on client side
    import('./dot-shader-background').then((mod) => {
      setShaderComponent(() => mod.DotScreenShader)
    })
  }, [])

  if (!mounted || !ShaderComponent) {
    return <div className="absolute inset-0 bg-black" />
  }

  return <ShaderComponent />
}

