'use client';

import { LinkNext, routerUtils } from '@shared';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import React from 'react';
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

export const TopbarLink: React.FC<ITopbarLinkProps> = ({ link, className }) => {
    const pathname = usePathname();
    const { id, route, name, disabled } = link;

    const linkClasses = classNames(
        styles.link,
        className,
        { [`${styles.linkActive}`]: routerUtils.matchPath(route, pathname) },
        { [`${styles.linkDisabled}`]: disabled },
    );

    return (
        <LinkNext key={id} href={disabled ? '/' : routerUtils.generatePath(route)} size="m" className={linkClasses}>
            {name}
        </LinkNext>
    );
};
