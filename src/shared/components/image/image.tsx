import classNames from 'classnames';
import { default as NextImage } from 'next/image';
import React from 'react';
import type { IImageProps } from './image.api';

export const Image: React.FC<IImageProps> = (props) => {
    const { objectFit = 'unset', objectPosition = 'unset', className, ...otherProps } = props;

    return (
        <NextImage
            className={classNames(
                'image',
                `image--object-fit-${objectFit}`,
                `image--object-position-${objectPosition}`,
                className,
            )}
            {...otherProps}
        />
    );
};
