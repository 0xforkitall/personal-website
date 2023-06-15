import classNames from 'classnames';
import React from 'react';
import { Layout } from '../layout';
import { type IChipProps } from './chip.api';

export const Chip: React.FC<IChipProps> = (props) => {
    const { className, children, size = 'm', ...otherProps } = props;

    return (
        <Layout className={classNames('chip', `chip--size-${size}`, className)} {...otherProps}>
            {children}
        </Layout>
    );
};
