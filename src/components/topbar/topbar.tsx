import classNames from 'classnames';
import React from 'react';
import { Container, Image, Layout, Link } from '../../shared';
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
            <Image src="/logo.png" alt="0xforkitall logo" width={56} height={56} />
            <Layout gap="200" direction="row">
                {topbarLinks.map((link) => (
                    <Link
                        key={link.id}
                        className={classNames(styles.topbarLink, {
                            [`${styles.topbarLinkActive}`]: link.id === 'home',
                        })}
                    >
                        {`// ${link.name}`}
                    </Link>
                ))}
            </Layout>
        </Container>
    );
};
