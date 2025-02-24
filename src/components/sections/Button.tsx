import classnames from 'classnames'
import { Button } from "../ui/button"

interface ButtonProps {
    children: any,
    variant: 'primary' | 'primary-outlined',
    size: 'lg' | 'md' | 'xl',
    className?: string
}


const Btn: React.FC<ButtonProps> = ({ children, className, size, variant }) => {
    const btnClass = classnames({
        "bg-teal-500 text-white": variant === 'primary',
        "text-teal-500 border border-teal-500 hover:text-teal-500": variant === 'primary-outlined'
    })

    const sizeClass = classnames({
        "md:py-4 py-2 md:text-xl font-semibold": size === 'lg',
        "py-4 font-semibold": size === 'md',
        "md:py-6 font-semibold text-lg py-4": size === 'xl'
    })

    return (
        <Button
            variant='outline'
            className={`w-full h-auto !rounded-18 ${sizeClass} ${btnClass} ${className}`}
        >
            {children}
        </Button>
    )
}


export default Btn