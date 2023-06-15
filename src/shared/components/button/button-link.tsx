import classNames from 'classnames';
import { forwardRef } from 'react';
import type { IButtonLinkProps } from './button.api';

export const ButtonLink = forwardRef<HTMLAnchorElement, IButtonLinkProps>((props, ref) => {
    const { className, variant = 'primary', ...otherProps } = props;

    return <a ref={ref} className={classNames('button', `button--variant-${variant}`, className)} {...otherProps} />;
});

ButtonLink.displayName = 'ButtonLink';
