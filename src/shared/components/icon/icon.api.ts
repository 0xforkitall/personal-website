import type { IconType } from './icon-type';

export interface IIconProps {
    /**
     * Icon to be displayed.
     */
    icon: IconType;
    /**
     * Color of the icon.
     * @default inherit.
     */
    color?: 'white' | 'black' | 'primary';
    /**
     * Custom class for the component.
     */
    className?: string;
}
