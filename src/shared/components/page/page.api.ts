import type { IContainerProps } from '../container';

export interface IPageProps extends IContainerProps {
    /**
     * Variant of the page.
     * @default default
     */
    variant?: 'default' | 'no-spacing';
}
