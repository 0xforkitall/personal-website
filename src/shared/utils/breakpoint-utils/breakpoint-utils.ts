import type { Breakpoint } from '@shared/types';

class BreakpointUtils {
    private cssPropertyName = '--0xf-breakpoint';
    private breakpointOrder: Record<Breakpoint, number> = { xs: 0, sm: 1, md: 2, lg: 3, xl: 4, xxl: 5 };

    getCurrentBreakpoint = (): Breakpoint => {
        if (typeof window === 'undefined') {
            return 'sm';
        }

        const { documentElement } = document;
        const currentBreakpoint = window.getComputedStyle(documentElement).getPropertyValue(this.cssPropertyName);

        return currentBreakpoint.trim() as Breakpoint;
    };

    isDown = (breakpointTarget: Breakpoint, currentBreakpoint: Breakpoint): boolean =>
        this.breakpointOrder[currentBreakpoint] <= this.breakpointOrder[breakpointTarget];
}

export const breakpointUtils = new BreakpointUtils();
