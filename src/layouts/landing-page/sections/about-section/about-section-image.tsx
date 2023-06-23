'use client';

import classNames from 'classnames';
import StackedPeacksImage from '../../../../../public/assets/images/stacked-peaks.svg';
import styles from './about-section-image.module.scss';

export interface IAboutSectionImageProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const AboutSectionImage: React.FC<IAboutSectionImageProps> = ({ className }) => {
    return (
        <div className={classNames(className, styles.imageWrapper)}>
            <StackedPeacksImage className={styles.image} />
        </div>
    );
};
