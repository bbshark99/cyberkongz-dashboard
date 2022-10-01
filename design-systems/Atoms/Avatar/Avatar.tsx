import React from 'react';
import Image from 'next/image';

export interface AvatarProps {
    src: string,
    alt: string,
    className?: string
}

export const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    className: _className = ''
}) => {
    const className = [
        _className
    ].join(' ');

    return (
        <Image className={className} src={src} alt={alt} />
    );
};
