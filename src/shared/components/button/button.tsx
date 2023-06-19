import classNames from 'classnames';
import { forwardRef } from 'react';
import { Icon } from '../icon';
import type { IButtonProps } from './button.api';

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const { className, variant = 'primary', icon, children, ...otherProps } = props;

    return (
        <button
            ref={ref}
            className={classNames(
                'button',
                `button--variant-${variant}`,
                { 'button--only-icon': children == null && icon != null },
                className,
            )}
            {...otherProps}
        >
            {children}
            {icon && <Icon icon={icon} />}
        </button>
    );
});

Button.displayName = 'Button';
