import React from 'react'

export interface CardProps {};

export const Card: React.FC<CardProps> = () => {
    const className = [
        // border
        "rounded-lg",
        // padding
        "p-[25px]"
    ].join(' ');

    return (
        <div className={className}></div>
    );
};
