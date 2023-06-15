import { type AnchorHTMLAttributes, type HTMLAttributes } from 'react';

export interface IButtonBaseProps {
    /**
     * Variant of the component.
     * @default primary
     */
    variant?: 'primary' | 'secondary';
    /**
     * Custom class for the component.
     */
    className?: string;
}

export interface IButtonProps extends IButtonBaseProps, HTMLAttributes<HTMLButtonElement> {}

export interface IButtonLinkProps extends IButtonBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {}
