import { responsiveUtils } from '@shared/utils';
import classNames from 'classnames';
import React from 'react';
import type { ITextProps, TextSize, TextTag } from './text.api';

const sizeToTag: Record<TextSize, TextTag> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    inherit: 'p',
    l: 'p',
    m: 'p',
    s: 'p',
    xl: 'p',
};

export const Text: React.FC<ITextProps> = (props) => {
    const { className, tag, size, responsiveSize, color = 'white', ...otherProps } = props;
    const Tag = tag ?? sizeToTag[size ?? 'm'];

    const responsiveSizeClassnames = responsiveUtils.responsiveClassnames({
        prefix: 'text--size',
        prop: responsiveSize,
        value: size,
    });

    return (
        <Tag
            className={classNames('text', `text--color-${color}`, responsiveSizeClassnames, className)}
            {...otherProps}
        />
    );
};
