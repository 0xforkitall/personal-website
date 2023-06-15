'use client';

import { useEffect, useState } from 'react';

export interface IUseDidScrollParams {
    /**
     * Element scrolling on the current page, defaults to the html tag when not set.
     */
    scrollingElementId?: string;
}

export const useDidScroll = ({ scrollingElementId }: IUseDidScrollParams) => {
    const [didScroll, setDidScroll] = useState(false);

    useEffect(() => {
        const element = scrollingElementId != null ? document.getElementById(scrollingElementId) : undefined;
        const scrollingElement = element ?? document.documentElement;

        const handleScroll = () => {
            setDidScroll(scrollingElement.scrollTop > 0);
        };

        scrollingElement.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            scrollingElement.removeEventListener('scroll', handleScroll);
        };
    }, [scrollingElementId]);

    return didScroll;
};
