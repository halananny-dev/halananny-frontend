import { cn } from "@/lib/utils"
import * as React from "react"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {

    return (
      <input
        type={type}
        className={cn(
          "rounded-xl !bg-white border border-gray-10 flex w-full px-6 py-3 font-semibold outline-none",
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

