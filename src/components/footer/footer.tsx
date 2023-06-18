import { personalSocials } from '@constants/socials';
import { ButtonLink, Container, Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import styles from './footer.module.css';

export interface IFooterProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const Footer: React.FC<IFooterProps> = ({ className }) => {
    const currentYear = new Date().getFullYear();

    return (
        <Layout direction="column">
            <Container className={classNames(styles.footer, className)} direction="column">
                <Layout
                    direction="row"
                    justifyContent="space-between"
                    className={styles.footerMain}
                    responsiveDirection={{ m: 'column' }}
                    alignItems="center"
                >
                    <Text size="h4" color="white">
                        0xforkitall
                    </Text>
                    <Layout direction="row" gap="0" alignItems="center">
                        {personalSocials.map(({ id, link, icon }) => (
                            <ButtonLink key={id} href={link} target="_blank" variant="neutral" icon={icon} />
                        ))}
                    </Layout>
                </Layout>
            </Container>
            <Container justifyContent="center" className={styles.footerCopyright} gap="50" wrap="wrap" rowGap="0">
                <Text size="s" color="white">
                    Made from scratch with ❤️
                </Text>
                <Text size="s" color="white">
                    Copyright © {currentYear} 0xforkitall
                </Text>
            </Container>
        </Layout>
    );
};
