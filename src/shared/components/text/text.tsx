import classNames from 'classnames';
import React from 'react';
import type { ITextProps } from './text.api';

export const Text: React.FC<ITextProps> = (props) => {
    const { className, tag: Tag = 'p', size = 'm', ...otherProps } = props;

    return <Tag className={classNames('text', `text--size-${size}`, className)} {...otherProps} />;
};
