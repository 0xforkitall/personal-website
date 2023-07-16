import { default as Link } from 'next/link';
import React from 'react';
import { linkUtils } from './link-utils';
import type { ILinkNextProps } from './link.api';

export const LinkNext: React.FC<ILinkNextProps> = (props) => {
    const { color, size, variant, className, disabled, truncate, children, ...otherProps } = props;

    return (
        <Link aria-disabled={disabled} className={linkUtils.buildClassnames(props)} {...otherProps}>
            {children}
        </Link>
    );
};
