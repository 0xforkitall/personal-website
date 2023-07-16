import React from 'react';
import { linkUtils } from './link-utils';
import type { ILinkProps } from './link.api';

export const Link: React.FC<ILinkProps> = (props) => {
    const { color, size, variant, className, disabled, truncate, children, ...otherProps } = props;

    return (
        <a aria-disabled={disabled} className={linkUtils.buildClassnames(props)} {...otherProps}>
            {children}
        </a>
    );
};
