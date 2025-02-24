import React from 'react'
import Title from './Title'

interface CardProps {
    title?: string
    children: any
    className?: string
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
        <section className={"lg:mt-14 mt-10 lg:py-16 py-10 md:px-10 px-4 max-w-max mx-auto rounded-26 bg-white " + className}>
            {title && <Title>{title}</Title>}
            {children}
        </section>)
}

export default Card