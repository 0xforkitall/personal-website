import classNames from 'classnames';
import React from 'react';
import type { ILinkProps } from './link.api';

export const Link: React.FC<ILinkProps> = (props) => {
    const { className, size = 'm', ...otherProps } = props;

    return <a className={classNames('link', `link--size-${size}`, className)} {...otherProps} />;
};
