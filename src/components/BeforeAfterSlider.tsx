'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface BeforeAfterSliderProps {
  before: string
  after: string
  beforeAlt: string
  afterAlt: string
  initialPosition?: number
}

export default function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  initialPosition = 50
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const [position, setPosition] = useState(() => Math.min(90, Math.max(10, initialPosition - 20)))

  const clampPosition = useCallback((value: number) => {
    if (Number.isNaN(value)) return 50
    return Math.min(92, Math.max(8, value))
  }, [])

  const updateFromClientX = useCallback(
    (clientX: number) => {
      const rect = containerRef.current?.getBoundingClientRect()
      if (!rect) return
      const relativeX = ((clientX - rect.left) / rect.width) * 100
      setPosition(clampPosition(relativeX))
    },
    [clampPosition]
  )

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging.current) return
      updateFromClientX(event.clientX)
    }

    const handlePointerUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerUp)
    }
  }, [updateFromClientX])

  const startDrag = (clientX: number) => {
    isDragging.current = true
    updateFromClientX(clientX)
  }

  return (
    <div
      ref={containerRef}
      className="before-after-slider relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/15 bg-black/40 select-none"
      onPointerDown={(event) => startDrag(event.clientX)}
    >
      <Image src={after} alt={afterAlt} fill className="object-cover" />
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image src={before} alt={beforeAlt} fill className="object-cover" />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 flex items-center"
        style={{ left: `min(calc(${position}% - 1px), 94%)` }}
      >
        <div className="relative h-full w-[2px] bg-amber-400/80">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-400 text-black text-[10px] font-semibold tracking-[0.2em] px-3 py-1 shadow-lg shadow-amber-500/40">
            {Math.round(position)}%
          </span>
        </div>
      </div>

      <div className="absolute inset-0 cursor-ew-resize" role="presentation" />

      <div className="absolute bottom-4 left-1/2 flex w-4/5 -translate-x-1/2 items-center justify-center">
        <input
          type="range"
          min={8}
          max={92}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          className="w-full appearance-none bg-white/10 h-[3px] rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:shadow-[0_0_12px_rgba(16,185,129,0.45)] [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-amber-400 [&::-moz-range-thumb]:border-0"
          aria-label="Reveal after image"
        />
      </div>

      <div className="pointer-events-none absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
        BEFORE
      </div>
      <div className="pointer-events-none absolute top-4 right-4 rounded-full bg-amber-400/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-black">
        AFTER
      </div>
    </div>
  )
}
