import React from 'react'
import { useRouter } from 'next/router';

export interface SidebarProps {};

export const Sidebar: React.FC<SidebarProps> = () => {
    const className = [
        // size
        "max-w-[250px] min-w-[250px] h-full",
        // padding
        "py-[60px] px-[22px]",
        // background color
        "bg-primary",
        // position
        "fixed top-0 left-0"
    ].join(' ');
    const router = useRouter();

    return (
        <div className={className}></div>
    )
};
