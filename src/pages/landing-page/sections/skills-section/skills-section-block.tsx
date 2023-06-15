import { Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import type { ISkill } from './skills-definition';
import styles from './skills-section-block.module.css';

export interface ISkillsSectionBlockProps {
    /**
     * Skill to be rendered.
     */
    skill: ISkill;
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const SkillsSectionBlock: React.FC<ISkillsSectionBlockProps> = ({ skill, className }) => {
    const { name, description, color } = skill;

    return (
        <Layout
            className={classNames(styles.skillsSectionBlock, className)}
            gap="100"
            direction="column"
            alignItems="center"
        >
            <div className={styles.skillIconWrapper} style={{ backgroundColor: `var(--forkitall-color-${color}` }} />
            <Text size="h4" tag="h4">
                {name}
            </Text>
            <Text size="m" tag="p">
                {description}
            </Text>
        </Layout>
    );
};
