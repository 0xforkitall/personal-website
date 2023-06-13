import type { HTMLAttributes } from 'react';
import { type ITextProps } from '../text';

export interface ILinkProps extends HTMLAttributes<HTMLAnchorElement> {
    /**
     * Size of the link.
     * @default m
     */
    size?: ITextProps['size'];
    /**
     * Custom class for the component.
     */
    className?: string;
}
