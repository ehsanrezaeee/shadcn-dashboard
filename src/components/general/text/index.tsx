// import { useLocale } from 'next-intl';


import React from 'react'
import { Color, Size, Variant } from './types';

interface Props {
    type?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a';
    variant?: Variant;
    size?: Size;
    // fontFamily?: 'PublicSans';
    children: React.ReactNode | string;
    color?: Color;
    className?: string;
}

const sizes: Record<Size, string> = {
    "Display 2xl": "text-[72px] -[90px] letter-spacing-[-2%]",
    "Display xl": "text-[60px] -[72px] letter-spacing-[-2%]",
    "Display lg": "text-[48px] -[60px] letter-spacing-[-2%]",
    "Display md": "text-[36px] -[44px] letter-spacing-[-2%]",
    "Display sm": "text-[30px] -[38px]",
    "Display xs": "text-[24px] -[32px]",
    "Text xl": "text-[20px] -[30px]",
    "Text lg": "text-[18px] -[28px]",
    "Text md": "text-[16px] -[24px]",
    "Text sm": "text-[14px] -[20px]",
    "Text xs": "text-[12px] -[18px]",
}


const variants: Record<Variant, string> = {
    Regular: 'font-normal',
    Medium: 'font-medium',
    Semibold: 'font-semibold',
    Bold: 'font-bold',
}

export const Text: React.FC<Props> = ({
    type = 'span',
    children,
    variant = 'Regular',
    size = 'Text md',
    className = "",
    color = 'text-Text-Light-Primary',
}: Props) => {
    const sizeClasses = sizes[size];
    const variantClasses = variants[variant];

    return React.createElement(
        type,
        {
            className: [
                sizeClasses,
                variantClasses,
                color,
                className,
            ].join(' '),
        },
        children
    );
}
