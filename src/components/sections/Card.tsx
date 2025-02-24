import React from 'react'
import Title from './Title'

interface CardProps {
    title?: string
    children: any
    className?: string
}

const Card: React.FC<CardProps> = ({ title, children, className }) => {
    return (
        <section className={"mt-14 py-16 px-10 max-w-max mx-auto rounded-26 bg-white " + className}>
            {title && <Title>{title}</Title>}
            {children}
        </section>)
}

export default Card