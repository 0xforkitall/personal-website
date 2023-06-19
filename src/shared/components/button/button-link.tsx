import classNames from 'classnames';
import { forwardRef } from 'react';
import { Icon } from '../icon';
import type { IButtonLinkProps } from './button.api';

export const ButtonLink = forwardRef<HTMLAnchorElement, IButtonLinkProps>((props, ref) => {
    const { children, className, variant = 'primary', icon, ...otherProps } = props;

    return (
        <a
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
        </a>
    );
});

ButtonLink.displayName = 'ButtonLink';
