'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Breakpoint } from '../../types';
import { breakpointUtils } from '../../utils';

export type BreakpointListener = (breakpoint: Breakpoint) => void;

const breakpointListeners = new Set<BreakpointListener>();

let currentBreakpoint: string | undefined;

const handleResize = () => {
    const breakpoint = breakpointUtils.getCurrentBreakpoint();

    if (currentBreakpoint != breakpoint) {
        currentBreakpoint = breakpoint;
        breakpointListeners.forEach((listener) => listener(breakpoint));
    }
};

export interface IUseBreakpointResult {
    /**
     * Current breakpoint set as CSS custom property.
     */
    breakpoint: string;
    /**
     * Checks if the breakpoint passed as input is below the current breakpoint.
     */
    isDown: (breakpoint: Breakpoint) => boolean;
}

export const useBreakpoint = (): IUseBreakpointResult => {
    const [breakpoint, setBreakpoint] = useState(breakpointUtils.getCurrentBreakpoint());

    useEffect(() => {
        breakpointListeners.add(setBreakpoint);
        const newBreakpoint = breakpointUtils.getCurrentBreakpoint();

        // Attach resize event listener only if this is the first listeners.
        if (breakpointListeners.size === 1) {
            window.addEventListener('resize', handleResize);
        }

        setBreakpoint(newBreakpoint);

        return () => {
            breakpointListeners.delete(setBreakpoint);

            // Remove resize event listeners when last listener is unmounted.
            if (breakpointListeners.size === 0) {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, []);

    const isDown = useCallback(
        (breakpointTarget: Breakpoint) => breakpointUtils.isDown(breakpointTarget, breakpoint),
        [breakpoint],
    );

    return { breakpoint, isDown };
};
