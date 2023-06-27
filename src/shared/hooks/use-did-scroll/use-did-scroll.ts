'use client';

import { useEffect, useState } from 'react';

export interface IUseDidScrollParams {
    /**
     * Selector element to attach the scroll listener to, defaults to the window object.
     */
    elementSelector?: string;
}

type DidScrollListener = (didScroll: boolean) => void;

const didScrollListeners = new Set<DidScrollListener>();

/**
 * Hook to check if the user scrolled below the specified element-selector or the main window object.
 * The hook internally uses a listeners set to avoid attaching multiple scroll listeners to the same element.
 * @param UseDidScrollParams @see IUseDidScrollParams
 * @returns true if the user scrolled below the specified element-selector, false otherwise
 */
export const useDidScroll = ({ elementSelector }: IUseDidScrollParams = {}): boolean => {
    const [didScroll, setDidScroll] = useState(false);

    useEffect(() => {
        const element = elementSelector != null ? document.querySelector(elementSelector) : undefined;
        const scrollingElement = element ?? window;

        const handleScroll = () => {
            const topPosition =
                scrollingElement === window ? scrollingElement.scrollY : (scrollingElement as HTMLElement).scrollTop;

            didScrollListeners.forEach((listener) => listener(topPosition > 0));
        };

        didScrollListeners.add(setDidScroll);

        if (didScrollListeners.size === 1) {
            scrollingElement.addEventListener('scroll', handleScroll, { passive: true });
        }

        return () => {
            didScrollListeners.delete(setDidScroll);

            if (didScrollListeners.size === 1) {
                scrollingElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, [elementSelector]);

    return didScroll;
};
