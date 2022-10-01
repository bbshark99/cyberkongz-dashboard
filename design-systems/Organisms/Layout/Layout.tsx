import React from 'react'
import type { PropsWithChildren } from 'react'

import { Sidebar, Header } from '../'

export interface LayoutProps extends PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({
    children
}) => {
    return (
        <div className="w-screen h-screen flex">
            <Sidebar />
            <div className="w-full h-full overflow-x-hidden overflow-y-auto">
                <Header />
                {children}
            </div>
        </div>
    );
};
