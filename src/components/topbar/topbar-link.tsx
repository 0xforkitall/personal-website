'use client';

import { routerUtils } from '@0xforkitall/ui-kit';
import { Link } from '@0xforkitall/ui-kit-nextjs';
import { routes, type Route } from '@constants/routes';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import React, { useMemo } from 'react';
import type { ITopbarLink } from './topbar-definitions';
import styles from './topbar-link.module.scss';

export interface ITopbarLinkProps {
    /**
     * Link to be rendered.
     */
    link: ITopbarLink;
    /**
     * Custom class for the component.
     */
    className?: string;
}

// Iterates the route's children to collect all routes url to match the correctly set the current link as  active.
export const collectChildrenRoutes = (route: Route): string[] => {
    const routesQueue = [route];
    const allRoutes = [];

    while (routesQueue.length > 0) {
        const currentRoute = routesQueue.shift()!;
        allRoutes.push(routes[currentRoute].url);
        routes[currentRoute].children?.forEach((route) => routesQueue.push(route));
    }

    return allRoutes;
};

export const TopbarLink: React.FC<ITopbarLinkProps> = ({ link, className }) => {
    const pathname = usePathname();

    const { id, route, name, disabled } = link;
    const routesToMatch = useMemo(() => collectChildrenRoutes(route), [route]);

    const linkClasses = classNames(
        styles.link,
        className,
        { [`${styles.linkActive}`]: routerUtils.matchPath(routesToMatch, pathname) },
        { [`${styles.linkDisabled}`]: disabled },
    );

    return (
        <Link
            key={id}
            href={disabled ? '/' : routerUtils.generatePath(routes[route].url)}
            size="m"
            className={linkClasses}
        >
            {name}
        </Link>
    );
};
