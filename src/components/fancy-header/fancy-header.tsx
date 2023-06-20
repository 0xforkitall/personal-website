import { Text } from '@shared';
import classNames from 'classnames';
import React, { type ReactNode } from 'react';
import styles from './fancy-header.module.scss';

export interface IFancyHeaderProps {
    /**
     * Custom class for the component.
     */
    className?: string;
    /**
     * Children of the component.
     */
    children?: ReactNode;
}

export const FancyHeader: React.FC<IFancyHeaderProps> = ({ className, children }) => {
    return (
        <Text size="h1" className={classNames(styles.fancyHeader, className)} responsiveSize={{ xs: 'h2' }}>
            {children}
        </Text>
    );
};
