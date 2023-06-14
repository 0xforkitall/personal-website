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
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    /**
     * Vertical alignment of the elements.
     */
    alignItems?: 'center' | 'start' | 'end' | 'baseline';
    /**
     * Justify property of the stack layout.
     */
    justifyContent?: 'start' | 'space-between' | 'center' | 'end';
    /**
     * Flex grow property of the stack layout.
     */
    grow?: '0' | '1';
    /**
     * Flex shrink property of the stack layout.
     */
    shrink?: '0' | '1';
    /**
     * Wrap property of the stack layout.
     */
    wrap?: 'wrap' | 'nowrap';
    /**
     * Custom class for the component.
     */
    className?: string;
}
