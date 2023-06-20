import { Chip, Icon, Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import type { ISkill } from './skills-definition';
import styles from './skills-section-block.module.scss';

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
    const { name, description, topics, icon } = skill;

    return (
        <Layout
            className={classNames(styles.skillsSectionBlock, className)}
            gap="200"
            direction="column"
            grow="1"
            basis="0"
            justifyContent="space-between"
        >
            <Layout gap="100" direction="column" alignItems="center">
                <Layout
                    className={styles.skillIconWrapper}
                    style={{ backgroundColor: `var(--0xf-color-primary-300` }}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Icon icon={icon} color="black" />
                </Layout>
                <Text size="h4">{name}</Text>
                <Text size="m">{description}</Text>
            </Layout>
            <Layout gap="50" direction="row" wrap="wrap" justifyContent="start" fullWidth={true}>
                {topics.map((topic) => (
                    <Chip key={topic} size="s">
                        {topic}
                    </Chip>
                ))}
            </Layout>
        </Layout>
    );
};
