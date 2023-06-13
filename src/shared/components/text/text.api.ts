import { type HTMLAttributes } from 'react';

export type TextTag = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type TextSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'xl' | 'l' | 'm' | 's' | 'inherit';

export interface ITextProps extends HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement> {
    /**
     * Size of the text.
     * @default inherit
     */
    size?: TextSize;
    /**
     * Tag to be used.
     * @default p
     */
    tag?: TextTag;
    /**
     * Color of the text.
     * @default white
     */
    color?: 'white' | 'black' | 'primary';
    /**
     * Custom class for the component.
     */
    className?: string;
}
