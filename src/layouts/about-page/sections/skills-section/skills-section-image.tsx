'use client';

import classNames from 'classnames';
import LayeredStepsImage from '../../../../../public/assets/images/layered-steps.svg';
import styles from './skills-section-image.module.scss';

export interface ISkillsSectionImageProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const SkillsSectionImage: React.FC<ISkillsSectionImageProps> = ({ className }) => {
    return (
        <div className={classNames(className, styles.imageWrapper)}>
            <LayeredStepsImage className={styles.image} />
        </div>
    );
};
