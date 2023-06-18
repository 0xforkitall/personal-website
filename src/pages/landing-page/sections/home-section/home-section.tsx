import { Canvas } from '@components/canvas';
import { ButtonLink, IconType, Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import { HomeSectionModel } from './home-section-model';
import styles from './home-section.module.scss';

export interface IHomeSectionProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const HomeSection: React.FC<IHomeSectionProps> = ({ className }) => {
    return (
        <Layout className={classNames(styles.homeSection, className)}>
            <Layout direction="column" gap="400" alignItems="start" className={styles.homeHero}>
                <Layout direction="column" gap="0">
                    <Text size="h1" responsiveSize={{ s: 'h2' }}>
                        <Text tag="span">Hi, I&apos;m </Text>
                        <Text tag="span" color="primary">
                            0xforkitall
                        </Text>
                        <Text tag="span">,</Text>
                    </Text>
                    <Text size="h3" responsiveSize={{ xs: 'h5' }}>
                        and I&apos;m a Blockchain Frontend Developer
                    </Text>
                </Layout>
                <ButtonLink
                    variant="secondary"
                    href="mailto:0xforkitall@gmail.com"
                    target="_blank"
                    icon={IconType.ARROW_RIGHT}
                >
                    Work with me
                </ButtonLink>
            </Layout>
            <Canvas>
                <HomeSectionModel />
            </Canvas>
        </Layout>
    );
};
