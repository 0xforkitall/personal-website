import { type HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
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
