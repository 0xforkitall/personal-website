import { type IResponsiveAttribute } from '@shared/types';
import { type HTMLAttributes } from 'react';

export type LayoutGap =
    | '0'
    | '25'
    | '50'
    | '75'
    | '100'
    | '125'
    | '150'
    | '200'
    | '250'
    | '300'
    | '400'
    | '500'
    | '600';

export type LayoutDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export interface ILayoutProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Display property of the layout.
     * @default flex;
     */
    display?: 'flex' | 'grid';
    /**
     * Gap between the items.
     */
    gap?: LayoutGap;
    /**
     * Row gap between the elements.
     */
    rowGap?: LayoutGap;
    /**
     * Direction of the elements (column by default).
     */
    direction?: LayoutDirection;
    /**
     * Direction of the elements of different breakpoints.
     */
    responsiveDirection?: IResponsiveAttribute<LayoutDirection>;
    /**
     * Vertical alignment of the elements.
     */
    alignItems?: 'center' | 'start' | 'end' | 'baseline';
    /**
     * Justify property of the layout.
     */
    justifyContent?: 'start' | 'space-between' | 'center' | 'end';
    /**
     * Flex grow property of the layout.
     */
    grow?: '0' | '1';
    /**
     * Flex basis property of the layout.
     */
    basis?: '0' | '1';
    /**
     * Flex shrink property of the layout.
     */
    shrink?: '0' | '1';
    /**
     * Wrap property of the layout.
     */
    wrap?: 'wrap' | 'nowrap';
    /**
     * Sets the layout width to 100%.
     */
    fullWidth?: boolean;
    /**
     * Custom class for the component.
     */
    className?: string;
}
