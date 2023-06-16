'use client';

import { useEffect, useState } from 'react';

export interface IUseDidScrollParams {
    /**
     * Selector element to attach the scroll listener to, defaults to the window object.
     */
    elementSelector?: string;
}

export const useDidScroll = ({ elementSelector }: IUseDidScrollParams = {}) => {
    const [didScroll, setDidScroll] = useState(false);

    useEffect(() => {
        const element = elementSelector != null ? document.querySelector(elementSelector) : undefined;
        const scrollingElement = element ?? window;

        const handleScroll = () => {
            const topPosition =
                scrollingElement === window ? scrollingElement.scrollY : (scrollingElement as HTMLElement).scrollTop;

            setDidScroll(topPosition > 0);
        };

        scrollingElement.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            scrollingElement.removeEventListener('scroll', handleScroll);
        };
    }, [elementSelector]);

    return didScroll;
};
