'use client';

import { ColorTheme } from '@shared/types';
import { colorThemeUtils } from '@shared/utils';
import { useCallback, useEffect, useState } from 'react';

export interface IUseColorThemeResult {
    /**
     * The theme that is currently applied.
     * @default DARK
     */
    currentTheme: ColorTheme;
    /**
     * Function to update the current theme.
     */
    updateTheme: (newTheme: ColorTheme) => void;
}

export const useColorTheme = (): IUseColorThemeResult => {
    const [currentTheme, setCurrentTheme] = useState<ColorTheme>();

    useEffect(() => {
        const currentTheme = document.documentElement.className.split(' ').find(colorThemeUtils.classNameToTheme);
        setCurrentTheme(colorThemeUtils.classNameToTheme(currentTheme));
    }, []);

    const updateTheme = useCallback((newTheme: ColorTheme) => {
        const currentClasses = document.documentElement.className.split(' ');

        const newClasses = currentClasses
            .filter((className) => colorThemeUtils.classNameToTheme(className) == null)
            .concat(colorThemeUtils.themeToClassName(newTheme))
            .join(' ')
            .trim();

        document.documentElement.className = newClasses;

        setCurrentTheme(newTheme);
    }, []);

    return { currentTheme: currentTheme ?? ColorTheme.DARK, updateTheme };
};
