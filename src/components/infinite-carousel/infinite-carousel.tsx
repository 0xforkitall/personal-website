'use client';

import { Layout, type ILayoutProps } from '@shared';
import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import styles from './infinite-carousel.module.scss';

export interface IInfiniteCarouselProps extends ILayoutProps {}

export const InfiniteCarousel: React.FC<IInfiniteCarouselProps> = ({ className, children, gap = '0', ...props }) => {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const { current: element } = carouselRef;

        if (!element) {
            return;
        }

        const carouselWidth = element.clientWidth / 2;
        const layoutGap = window.getComputedStyle(document.documentElement).getPropertyValue(`--0xf-spacer-${gap}`);
        const targetWidth = `calc((${carouselWidth}px + (${layoutGap} / 2)) * -1)`;

        element.style.setProperty('--0xf-infinite-carousel-width', targetWidth);
    }, [gap]);

    return (
        <Layout
            className={classNames(styles.infiniteCarousel, className)}
            ref={carouselRef}
            shrink="0"
            gap={gap}
            {...props}
        >
            {children}
            {children}
        </Layout>
    );
};
