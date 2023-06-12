import classNames from 'classnames';
import React, { type HTMLAttributes } from 'react';

export interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const Button: React.FC<IButtonProps> = ({ className }) => {
    return (
        <button className={classNames('button', className)}>
            test and some file some file some file some file some file
        </button>
    );
};
