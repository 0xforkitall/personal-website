import { type ImageProps as INextImageProps } from 'next/image';

export interface IImageProps extends INextImageProps {
    /**
     * Set the correct url for CMS assets.
     */
    isCmsAsset?: boolean;
    /**
     * Object-fit property for the image.
     * @default unset;
     */
    objectFit?: 'contain' | 'cover' | 'unset';
    /**
     * Object-position property for the image.
     * @default unset;
     */
    objectPosition?: 'bottom' | 'top' | 'unset';
    /**
     * Additional classes for the component.
     */
    className?: string;
}
