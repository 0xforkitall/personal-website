'use client';

import { Layout, Text } from '@0xforkitall/ui-kit';
import { Image } from '@0xforkitall/ui-kit-nextjs';
import { FancyHeader } from '@components/fancy-header';
import classNames from 'classnames';
import React from 'react';
import { AboutSectionImage } from './about-section-image';
import styles from './about-section.module.scss';

export interface IAboutSectionProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const AboutSection: React.FC<IAboutSectionProps> = ({ className }) => {
    const experienceYears = new Date().getFullYear() - 2016;

    return (
        <Layout className={classNames(styles.aboutSection, className)} gap="400" direction="column" alignItems="center">
            <FancyHeader>About me</FancyHeader>
            <Layout gap="500" direction="row" responsiveDirection={{ md: 'column' }} className={styles.aboutWrapper}>
                <div className={styles.aboutImage}>
                    <Image src="/assets/blog/authors/0xforkitall.png" alt="profile image" fill={true} />
                </div>
                <Layout gap="300" direction="column">
                    <Text size="h3" responsiveSize={{ xs: 'h5' }}>
                        Software Engineer, Frontend Developer and Blockchain Enthusiast
                    </Text>
                    <Layout gap="100" direction="column" className={styles.description}>
                        <Text size="m">
                            With over {experienceYears} years of experience in Frontend Development, I am a passionate
                            Software Engineer who constantly seeks the next challenge.
                        </Text>
                        <Text size="m">
                            I have a strong emphasis on innovation and have explored the world of blockchain and crypto
                            projects, actively discovering and contributing to new solutions.
                        </Text>
                        <Text size="m">
                            Feel free to explore my blog, where I am going to share insights, trends and my personal
                            experiences.
                        </Text>
                    </Layout>
                </Layout>
            </Layout>
            <AboutSectionImage className={styles.stackedImage} />
        </Layout>
    );
};
