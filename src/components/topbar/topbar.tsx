'use client';

import { Route, routes } from '@constants/routes';
import { Container, Layout, LinkNext, ThemeSwitch } from '@shared';
import { useDidScroll } from '@shared/hooks';
import classNames from 'classnames';
import React from 'react';
import { topbarLinks } from './topbar-definitions';
import { TopbarLink } from './topbar-link';
import styles from './topbar.module.scss';

export interface ITopbarProps {
    /**
     * Element that is scrolling on the current page.
     */
    elementSelector?: string;
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const Topbar: React.FC<ITopbarProps> = ({ elementSelector, className }) => {
    const didScroll = useDidScroll({ elementSelector });

    return (
        <Container
            gap="100"
            className={classNames(styles.topbar, { [`${styles.topbarScroll}`]: didScroll }, className)}
            justifyContent="space-between"
            alignItems="center"
        >
            <LinkNext size="h4" href={routes[Route.LANDING_PAGE].url} color="primary">
                0xf
            </LinkNext>
            <Layout gap="100" direction="row" alignItems="center">
                <Layout gap="200" direction="row">
                    {topbarLinks.map((link) => (
                        <TopbarLink key={link.id} link={link} />
                    ))}
                </Layout>
                <ThemeSwitch />
            </Layout>
        </Container>
    );
};
