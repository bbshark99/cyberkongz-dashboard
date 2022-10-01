import React from 'react'
import type { PropsWithChildren} from 'react'

type TypographyVariants = 'h1' | 'h2' | 'h3'

type TypographyWeight = 'bold' | 'semibold' | 'regular' | 'light'

export interface TypographyProps extends PropsWithChildren {
    variant?: TypographyVariants
    weight?: TypographyWeight
}

export const Typography: React.FC<TypographyProps> = ({
    variant = 'h3',
    weight = 'regular',
    children
}) => {
    return (
        <div className="">
            {children}
        </div>
    );
}
