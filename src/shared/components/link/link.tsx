import classNames from 'classnames';
import React from 'react';
import type { ILinkProps } from './link.api';

export const Link: React.FC<ILinkProps> = (props) => {
    const { className, size = 'm', color = 'inherit', variant = 'default', ...otherProps } = props;

    return (
        <a
            className={classNames(
                'link',
                `link--size-${size}`,
                `link--color-${color}`,
                `link--variant-${variant}`,
                className,
            )}
            {...otherProps}
        />
    );
};
