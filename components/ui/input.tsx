import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "inline-flex h-11 w-full rounded-lg border border-input bg-background p-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-base file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus:border-primary disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
