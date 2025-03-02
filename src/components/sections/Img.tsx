import React from 'react'
import Image from 'next/image'

interface ImgProps {
    src: string
    width?: number
    height?: number
    className?: string
    alt?: string
    style?: any
}

const Img: React.FC<ImgProps> = ({ src, width = 10, height = 10, className, alt = 'img', style }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            style={style}
            className={`w-auto h-auto ` + className}
            priority
            loading='eager'
        />)
}

export default Img