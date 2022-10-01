import React from 'react'

export interface HeaderProps {};

export const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="w-full flex items-center gap-4"></div>
    );
};
