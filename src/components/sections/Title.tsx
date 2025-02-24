import React from 'react';
import Img from './Img';

interface TitleProps {
    children: any;
    className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
    return (
        <div className={'flex flex-col items-center gap-2 pb-4 ' + className}>
            <h1 className="text-[42px] font-bold text-gray-900">{children}</h1>
            <Img src="/title.svg" />
        </div>
    )
}

export default Title