import type { LinkProps as NextLinkProps } from 'next/link';
import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { type ITextProps } from '../text';

export interface ILinkBaseProps {
    /**
     * Size of the link.
     * @default m
     */
    size?: ITextProps['size'];
    /**
     * Color of the link.
     */
    color?: ITextProps['color'];
    /**
     * Variant of the link.
     * @default default
     */
    variant?: 'default' | 'hover-underline' | 'underline';
    /**
     * Disables the link when set to true.
     * @default false
     */
    disabled?: boolean;
    /**
     * Truncates the link when it does not fit its container.
     * @default false
     */
    truncate?: boolean;
    /**
     * Custom class for the component.
     */
    className?: string;
}

export interface ILinkProps extends ILinkBaseProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {}

export interface ILinkNextProps extends NextLinkProps, ILinkBaseProps {
    /**
     * Children of the component.
     */
    children?: ReactNode;
}
