import classNames from 'classnames';
import React from 'react';

export interface IFooterProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const Footer: React.FC<IFooterProps> = ({ className }) => {
    return (
        <div className={classNames('footer', className)}>
            <p>Fotoer</p>
        </div>
    );
};
