import classNames from 'classnames';
import { forwardRef } from 'react';
import { Layout } from '../layout';
import { type IContainerProps } from './container.api';

export const Container = forwardRef<HTMLDivElement, IContainerProps>((props, ref) => {
    const { className, ...otherProps } = props;

    return <Layout ref={ref} className={classNames('container', className)} {...otherProps} />;
});

Container.displayName = 'Container';
