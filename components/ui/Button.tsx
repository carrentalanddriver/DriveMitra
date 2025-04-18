"use client";
import * as React from 'react'
import { cn } from '../../lib/utils'
import { motion } from 'framer-motion'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  neumorph?: boolean
  glass?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, neumorph, glass, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={cn(
          'px-6 py-2 font-semibold text-base rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2',
          neumorph && 'neumorph',
          glass && 'glass-bg',
          !neumorph && !glass && 'bg-accent text-white',
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
