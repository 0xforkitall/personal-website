import { Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import styles from './lists-section.module.scss';

export interface IListsSectionProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const ListsSection: React.FC<IListsSectionProps> = ({ className }) => {
    return (
        <Layout className={classNames(styles.listsSection, className)} gap="400" direction="column">
            <Layout gap="100" direction="column">
                <Text size="h2">Popular</Text>
                <div style={{ backgroundColor: 'lightgray', height: 400 }} />
            </Layout>
        </Layout>
    );
};
