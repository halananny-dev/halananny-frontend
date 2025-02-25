import React from 'react';
import Img from './Img';

interface TitleProps {
    children: any;
    className?: string;
    typographyClass?: string
}

const Title: React.FC<TitleProps> = ({ children, className, typographyClass }) => {
    return (
        <div className={'flex flex-col items-center gap-2 pb-4 ' + className}>
            <h1 className={"md:text-[42px] leading-snug text-2xl font-bold text-gray-900 " + typographyClass}>{children}</h1>
            <Img src="/title.svg" />
        </div>
    )
}

export default Title