import { FancyHeader } from '@components/fancy-header';
import { Image, Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import styles from './about-section.module.scss';

export interface IAboutSectionProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const AboutSection: React.FC<IAboutSectionProps> = ({ className }) => {
    return (
        <Layout className={classNames(styles.aboutSection, className)} gap="400" direction="column" alignItems="center">
            <FancyHeader>About me</FancyHeader>
            <Layout gap="500" direction="row" responsiveDirection={{ m: 'column' }} className={styles.aboutWrapper}>
                <div className={styles.aboutImage}>
                    <Image src="/assets/images/profile-image.png" alt="profile image" fill={true} />
                </div>
                <Layout gap="300" direction="column">
                    <Text size="h3" responsiveSize={{ xs: 'h4' }}>
                        Software Engineer, Frontend Developer and Blockchain Enthusiast
                    </Text>
                    <Layout gap="100" direction="column" className={styles.description}>
                        <Text size="m">
                            With extensive experience in Frontend Development, I am a passionate Software Engineer who
                            constantly seeks the next challenge.
                        </Text>
                        <Text size="m">
                            I have a strong emphasis on innovation and have explored the fascinating world of blockchain
                            and crypto projects, actively discovering and contributing to new solutions.
                        </Text>
                        <Text size="m">
                            Join me on this exhilarating journey as we collectively unlock the boundless potential of
                            technology.
                        </Text>
                    </Layout>
                </Layout>
            </Layout>
        </Layout>
    );
};
