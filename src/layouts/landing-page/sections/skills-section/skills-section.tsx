import { FancyHeader } from '@components/fancy-header';
import { Image, Layout } from '@shared';
import classNames from 'classnames';
import React from 'react';
import { skillList } from './skills-definition';
import { SkillsSectionBlock } from './skills-section-block';
import styles from './skills-section.module.scss';

export interface ISkillsSectionProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const SkillsSection: React.FC<ISkillsSectionProps> = ({ className }) => {
    return (
        <Layout
            className={classNames(styles.skillsSection, className)}
            gap="400"
            direction="column"
            alignItems="center"
        >
            <FancyHeader>My skillz</FancyHeader>
            <Layout gap="0" direction="column">
                <Layout gap="0" direction="row" wrap="wrap" responsiveDirection={{ m: 'column' }}>
                    {skillList.map((skill) => (
                        <SkillsSectionBlock className={styles.skillBlock} key={skill.id} skill={skill} />
                    ))}
                </Layout>
                <div className={styles.layeredImage}>
                    <Image src="/assets/images/layered-steps.svg" alt="" fill={true} objectFit="cover" />
                </div>
            </Layout>
        </Layout>
    );
};
