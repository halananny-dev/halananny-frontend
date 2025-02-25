"use client"

import { cn } from "@/lib/utils"
import * as React from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {

    const [t, setType] = React.useState(type)

    return (
      <div className="relative flex items-center">
        <input
          type={type}
          className={cn(
            "rounded-xl !bg-white border border-gray-10 flex w-full px-6 py-3 font-semibold outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
        {type === 'password' && <button
          onClick={() => setType(t === 'password' ? 'text' : 'password')}
          className="absolute text-2xl text-gray-20 right-5 rtl:left-5 rtl:right-auto">
          {t === 'password' ? <FaEye /> : <FaEyeSlash />}
        </button>}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }

