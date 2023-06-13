import { type HTMLAttributes } from 'react';

export type TextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type TextSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'xl' | 'l' | 'm' | 's';

export interface ITextProps extends HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
    /**
     * Tag to be used.
     * @default p
     */
    tag?: TextTag;
    /**
     * Size of the text.
     * @default m
     */
    size?: TextSize;
    /**
     * Custom class for the component.
     */
    className?: string;
}
