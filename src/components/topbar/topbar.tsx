import { routes } from '@constants/routes';
import { Container, Layout, Link, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import { topbarLinks } from './topbar-links';
import styles from './topbar.module.css';

export interface ITopbarProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const Topbar: React.FC<ITopbarProps> = ({ className }) => {
    return (
        <Container
            gap="100"
            className={classNames(styles.topbar, className)}
            justifyContent="space-between"
            alignItems="center"
        >
            <Link href={routes.landingPage}>
                <Text size="h4" tag="h4" color="primary">
                    0xf
                </Text>
            </Link>
            <Layout gap="200" direction="row">
                {topbarLinks.map(({ id, route, disabled, name }) => (
                    <Link
                        key={id}
                        href={route}
                        className={classNames(styles.topbarLink, {
                            [`${styles.topbarLinkActive}`]: id === 'home',
                            [`${styles.topbarLinkDisabled}`]: disabled,
                        })}
                    >
                        {`// ${name}`}
                    </Link>
                ))}
            </Layout>
        </Container>
    );
};
