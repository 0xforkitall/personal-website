import type { LinkProps } from 'next/link';
import type { ReactNode } from 'react';
import type { ILinkProps } from './link.api';

export interface ILinkNextProps extends LinkProps, Pick<ILinkProps, 'color' | 'size'> {
    /**
     * Children of the component.
     */
    children?: ReactNode;
    /**
     * Custom class for the component.
     */
    className?: string;
}
