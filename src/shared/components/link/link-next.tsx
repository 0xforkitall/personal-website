import classNames from 'classnames';
import { default as Link, type LinkProps } from 'next/link';
import React, { type ReactNode } from 'react';
import type { ILinkProps } from './link.api';

export interface ILinkNextProps extends LinkProps, Pick<ILinkProps, 'color' | 'size'> {
    /**
     * Disables the button when set to true.
     * @default false
     */
    disabled?: boolean;
    /**
     * Children of the component.
     */
    children?: ReactNode;
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const LinkNext: React.FC<ILinkNextProps> = (props) => {
    const { color = 'inherit', size = 'm', className, disabled = false, children, ...otherProps } = props;

    return (
        <Link
            aria-disabled={disabled}
            className={classNames(
                'link',
                `link--size-${size}`,
                `link--color-${color}`,
                { 'link--disabled': disabled },
                className,
            )}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
