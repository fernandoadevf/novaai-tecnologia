"use client"

import type React from "react"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  duration?: number
}

export function ScrollReveal({ children, className, delay = 0, direction = "up", duration = 600 }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal()

  const getTransformClass = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100"

    switch (direction) {
      case "up":
        return "translate-y-8 opacity-0"
      case "down":
        return "-translate-y-8 opacity-0"
      case "left":
        return "translate-x-8 opacity-0"
      case "right":
        return "-translate-x-8 opacity-0"
      case "fade":
        return "opacity-0"
      default:
        return "translate-y-8 opacity-0"
    }
  }

  return (
    <div
      ref={ref}
      className={cn("transition-all ease-out", getTransformClass(), className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
