import type { ILayoutProps } from '../layout';

export interface IChipProps extends ILayoutProps {
    /**
     * Size of the chip.
     * @default m
     */
    size?: 's' | 'm' | 'l';
}
