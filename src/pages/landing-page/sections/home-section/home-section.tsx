import { Button, Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import styles from './home-section.module.css';

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
                    <Text tag="h1">
                        <Text tag="span" size="h1">
                            Hi, I&apos;m{' '}
                        </Text>
                        <Text tag="span" size="h1" color="primary">
                            0xforkitall
                        </Text>
                        <Text tag="span" size="h1">
                            ,
                        </Text>
                    </Text>
                    <Text size="h3" tag="h3">
                        and I&apos;m a Blockchain Frontend Developer
                    </Text>
                </Layout>
                <Button variant="secondary">Work with me</Button>
            </Layout>
            <div className={styles.homeImage} />
        </Layout>
    );
};
