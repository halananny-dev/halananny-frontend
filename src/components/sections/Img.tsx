import React from 'react'
import Image from 'next/image'

interface ImgProps {
    src: string
    width?: number
    height?: number
    className?: string
    alt?: string
}

const Img: React.FC<ImgProps> = ({ src, width = 10, height = 10, className, alt = 'img' }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-auto h-auto ` + className}
            priority
        />)
}

export default Img