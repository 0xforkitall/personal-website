import { ColorTheme } from '@shared/types';

class ColorThemeUtils {
    colorThemeList = Object.keys(ColorTheme);
    themeClassPrefix = 'forkitall-theme-';

    getCurrentTheme = (): ColorTheme | undefined => {
        const currentTheme = document.documentElement.className.split(' ').find(colorThemeUtils.classNameToTheme);

        return colorThemeUtils.classNameToTheme(currentTheme);
    };

    themeToClassName = (theme: ColorTheme): string => `${this.themeClassPrefix}${theme}`;

    classNameToTheme = (className?: string): ColorTheme | undefined => {
        if (className == null || !className.includes(this.themeClassPrefix)) {
            return undefined;
        }

        const theme = className.slice(this.themeClassPrefix.length);

        return this.colorThemeList.includes(theme) ? (theme as ColorTheme) : undefined;
    };
}

export const colorThemeUtils = new ColorThemeUtils();
