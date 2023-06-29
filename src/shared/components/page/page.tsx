import classNames from 'classnames';
import React from 'react';
import { Container } from '../container';
import type { IPageProps } from './page.api';

export const Page: React.FC<IPageProps> = (props) => {
    const { className, children, variant = 'default', ...otherProps } = props;

    return (
        <Container className={classNames('page', `page--${variant}`, className)} direction="column" {...otherProps}>
            {children}
        </Container>
    );
};
