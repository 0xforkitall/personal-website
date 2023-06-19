import { type AnchorHTMLAttributes, type HTMLAttributes } from 'react';
import { type IconType } from '../icon';

export interface IButtonBaseProps {
    /**
     * Variant of the component.
     * @default primary
     */
    variant?: 'primary' | 'outline' | 'neutral-white' | 'neutral-black';
    /**
     * Icon of the button.
     */
    icon?: IconType;
    /**
     * Custom class for the component.
     */
    className?: string;
}

export interface IButtonProps extends IButtonBaseProps, HTMLAttributes<HTMLButtonElement> {}

export interface IButtonLinkProps extends IButtonBaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {}
