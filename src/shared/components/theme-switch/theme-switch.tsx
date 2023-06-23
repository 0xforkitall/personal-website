import { useColorTheme } from '@shared/hooks';
import { ColorTheme } from '@shared/types';
import classNames from 'classnames';
import React from 'react';
import { Button } from '../button';
import { IconType } from '../icon';

export interface IThemeSwitchProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const ThemeSwitch: React.FC<IThemeSwitchProps> = ({ className }) => {
    const { currentTheme, updateTheme } = useColorTheme();

    return (
        <Button
            className={classNames('theme-switch', className)}
            icon={currentTheme === ColorTheme.DARK ? IconType.SUN : IconType.MOON}
            variant="neutral-white"
            onClick={() => updateTheme(currentTheme === ColorTheme.DARK ? ColorTheme.LIGHT : ColorTheme.DARK)}
        />
    );
};
