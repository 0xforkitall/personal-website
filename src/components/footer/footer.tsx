import { Route, routes } from '@constants/routes';
import { personalSocials } from '@constants/socials';
import { ButtonLink, Container, Layout, LinkNext, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import styles from './footer.module.scss';

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
                    responsiveDirection={{ md: 'column' }}
                    alignItems="center"
                >
                    <LinkNext size="h4" color="black" href={routes[Route.LANDING_PAGE].url}>
                        0xforkitall
                    </LinkNext>
                    <Layout direction="row" gap="50" alignItems="center">
                        {personalSocials.map(({ id, link, icon }) => (
                            <ButtonLink
                                key={id}
                                href={link}
                                target="_blank"
                                variant="neutral-black"
                                icon={icon}
                                aria-label={`${id} link`}
                            />
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
