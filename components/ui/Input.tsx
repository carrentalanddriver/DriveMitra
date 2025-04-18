"use client";
import * as React from 'react'
import { cn } from '../../lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        'w-full px-4 py-2 rounded-lg bg-slate-800 text-white placeholder:text-slate-400 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-accent',
        className
      )}
      {...props}
    />
  )
)
Input.displayName = 'Input'
