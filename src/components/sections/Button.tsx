import classnames from 'classnames'
import { Button } from "../ui/button"

interface ButtonProps {
    children: any,
    variant: 'primary' | 'primary-outlined',
    size: 'lg' | 'md' | 'xl',
    className?: string,
    onClick?: () => void,
    disabled?: boolean
    type?: 'button' | 'submit'
}


const Btn: React.FC<ButtonProps> = ({ children, className, size, variant, onClick, disabled, type = 'button' }) => {
    const btnClass = classnames({
        "bg-teal-500 text-white disabled:bg-[#D1D1D1]": variant === 'primary',
        "text-teal-500 border border-teal-500 hover:text-teal-500": variant === 'primary-outlined'
    })

    const sizeClass = classnames({
        "md:py-4 py-2 md:text-xl font-semibold": size === 'lg',
        "py-4 font-semibold": size === 'md',
        "md:py-6 font-semibold text-lg py-4": size === 'xl'
    })

    return (
        <Button
            disabled={disabled}
            type={type}
            onClick={onClick}
            variant='outline'
            className={`w-full h-auto !rounded-18 ${sizeClass} ${btnClass} ${className}`}
        >
            {children}
        </Button>
    )
}


export default Btn