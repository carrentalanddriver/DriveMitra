"use client";
import * as React from 'react'
import { cn } from '../../lib/utils'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  glass?: boolean
  neumorph?: boolean
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, glass, neumorph, children, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        'w-full px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent appearance-none',
        glass && 'glass-bg',
        neumorph && 'neumorph',
        className
      )}
      {...props}
    >
      {children}
    </select>
  )
)
Select.displayName = 'Select'
