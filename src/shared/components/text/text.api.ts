import { type IResponsiveAttribute } from '@shared/types';
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
     * Responsive sizes for the text.
     */
    responsiveSize?: IResponsiveAttribute<TextSize>;
    /**
     * Tag to be used, defaults to the relative header tag for header sizes or to p.
     */
    tag?: TextTag;
    /**
     * Color of the text.
     * @default white
     */
    color?: 'white' | 'black' | 'primary' | 'muted';
    /**
     * Custom class for the component.
     */
    className?: string;
}
