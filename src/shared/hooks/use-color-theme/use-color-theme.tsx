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

type ColorThemeListener = (newTheme: ColorTheme) => void;

const colorThemeListeners = new Set<ColorThemeListener>();

export const useColorTheme = (): IUseColorThemeResult => {
    const [currentTheme, setCurrentTheme] = useState(colorThemeUtils.getCurrentTheme());

    useEffect(() => {
        colorThemeListeners.add(setCurrentTheme);
    }, []);

    const updateTheme = useCallback((newTheme: ColorTheme) => {
        const currentClasses = document.documentElement.className.split(' ');

        const newClasses = currentClasses
            .filter((className) => colorThemeUtils.classNameToTheme(className) == null)
            .concat(colorThemeUtils.themeToClassName(newTheme))
            .join(' ')
            .trim();

        document.documentElement.className = newClasses;

        colorThemeListeners.forEach((listener) => listener(newTheme));
    }, []);

    return { currentTheme: currentTheme ?? ColorTheme.DARK, updateTheme };
};
