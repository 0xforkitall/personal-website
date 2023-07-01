import { FancyHeader } from '@components/fancy-header';
import { Layout } from '@shared';
import classNames from 'classnames';
import React from 'react';
import { skillList } from './skills-definition';
import { SkillsSectionBlock } from './skills-section-block';
import { SkillsSectionImage } from './skills-section-image';
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
            <FancyHeader>My skills</FancyHeader>
            <Layout gap="0" direction="column">
                <Layout gap="0" direction="row" wrap="wrap" responsiveDirection={{ md: 'column' }}>
                    {skillList.map((skill) => (
                        <SkillsSectionBlock className={styles.skillBlock} key={skill.id} skill={skill} />
                    ))}
                </Layout>
                <SkillsSectionImage />
            </Layout>
        </Layout>
    );
};
