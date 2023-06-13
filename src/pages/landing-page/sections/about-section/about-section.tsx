import classNames from 'classnames';
import React from 'react';
import styles from './about-section.module.css';

export interface IAboutSectionProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const AboutSection: React.FC<IAboutSectionProps> = ({ className }) => {
    return (
        <div className={classNames(styles.aboutSection, className)}>
            <p>AboutSection</p>
        </div>
    );
};
