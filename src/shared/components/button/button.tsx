import classNames from 'classnames';
import { forwardRef } from 'react';
import type { IButtonProps } from './button.api';

export const Button = forwardRef<HTMLButtonElement, IButtonProps>((props, ref) => {
    const { className, variant = 'primary', ...otherProps } = props;

    return (
        <button ref={ref} className={classNames('button', `button--variant-${variant}`, className)} {...otherProps} />
    );
});

Button.displayName = 'Button';
