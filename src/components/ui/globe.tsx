"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const GLOBE_CONFIG: COBEOptions = {
  width: 600,
  height: 600,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.3,
  mapSamples: 12000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [{ location: [52.1205, 11.6276], size: 0.1 }], // Nur Magdeburg
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string
  config?: COBEOptions
}) {
  const [width, setWidth] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const phiRef = useRef<number>(0)
  const [isCanvasReady, setIsCanvasReady] = useState(false)
  const frameRef = useRef<number>()

  const onRender = useCallback(
    (state: Record<string, any>) => {
      phiRef.current += 0.003
      state.phi = phiRef.current
      state.width = width * 2
      state.height = width * 2
    },
    [width],
  )

  const onResize = () => {
    if (canvasRef.current) {
      setWidth(canvasRef.current.offsetWidth)
    }
  }

  useEffect(() => {
    window.addEventListener("resize", onResize)
    onResize()
    setIsCanvasReady(true)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      window.removeEventListener("resize", onResize)
    }
  }, [])

  useEffect(() => {
    if (!isCanvasReady || !canvasRef.current || width === 0) return

    let globe: any = null
    try {
      globe = createGlobe(canvasRef.current, {
        ...config,
        width: width * 2,
        height: width * 2,
        onRender,
      })

      // Set opacity after a small delay to ensure smooth transition
      const timer = setTimeout(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1"
        }
      }, 50)

      return () => {
        clearTimeout(timer)
        if (globe) {
          globe.destroy()
        }
      }
    } catch (error) {
      console.error('Failed to initialize globe. Width:', width, 'Error:', error)
      return undefined
    }
  }, [isCanvasReady, config, onRender, width])

  return (
    <div
      className={cn(
        "relative w-full h-full",
        className,
      )}
    >
      <canvas
        className={cn(
          "w-full h-full opacity-0 transition-opacity duration-500",
        )}
        ref={canvasRef}
      />
    </div>
  )
}