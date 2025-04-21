import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-bold transition-all",
  {
    variants: {
      variant: {
        default: "btn-neo bg-white text-black hover:bg-gray-100 dark:bg-black dark:text-white dark:hover:bg-gray-900",
        pink: "btn-neo-pink text-black hover:bg-[#FF90E8]/90",
        yellow: "btn-neo bg-[#FFF500] text-black hover:bg-[#FFF500]/90 dark:border-[#FFF500] dark:bg-[#FFF500] dark:text-black dark:shadow-[4px_4px_0px_0px_rgba(255,245,0,1)]",
        blue: "btn-neo bg-[#90E0EF] text-black hover:bg-[#90E0EF]/90 dark:border-[#90E0EF] dark:bg-[#90E0EF] dark:text-black dark:shadow-[4px_4px_0px_0px_rgba(144,224,239,1)]",
        green: "btn-neo bg-[#8FFF90] text-black hover:bg-[#8FFF90]/90 dark:border-[#8FFF90] dark:bg-[#8FFF90] dark:text-black dark:shadow-[4px_4px_0px_0px_rgba(143,255,144,1)]",
        outline: "btn-neo border-2 border-black bg-transparent hover:bg-gray-100 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-gray-900",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline dark:text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }