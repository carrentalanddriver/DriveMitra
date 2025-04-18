"use client";
import * as React from 'react'
import { cn } from '../../lib/utils'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glass?: boolean
  neumorph?: boolean
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, glass, neumorph, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'p-6 rounded-2xl shadow-lg',
        glass && 'glass-bg',
        neumorph && 'neumorph',
        className
      )}
      {...props}
    />
  )
)
Card.displayName = 'Card'
