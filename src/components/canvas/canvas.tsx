'use client';

import { Canvas as ThreeCanvas } from '@react-three/fiber';
import classNames from 'classnames';
import React, { type ReactNode } from 'react';
import styles from './canvas.module.scss';

export interface ICanvasProps {
    /**
     * Custom class for the component.
     */
    className?: string;
    /**
     * Children of the component.
     */
    children?: ReactNode;
}

export const Canvas: React.FC<ICanvasProps> = ({ className, children }) => {
    return <ThreeCanvas className={classNames(styles.homeSectionModel, className)}>{children}</ThreeCanvas>;
};
