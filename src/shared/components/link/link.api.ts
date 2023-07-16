import type { AnchorHTMLAttributes } from 'react';
import { type ITextProps } from '../text';

export interface ILinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    /**
     * Size of the link.
     * @default m
     */
    size?: ITextProps['size'];
    /**
     * Size of the link.
     * @default inherit
     */
    color?: ITextProps['color'];
    /**
     * Variant of the link.
     * @default default
     */
    variant?: 'default' | 'hover-underline';
    /**
     * Custom class for the component.
     */
    className?: string;
}
