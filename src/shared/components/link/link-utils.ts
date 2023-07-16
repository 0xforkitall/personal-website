import classNames from 'classnames';
import type { ILinkBaseProps } from './link.api';

class LinkUtils {
    buildClassnames = (props: ILinkBaseProps) => {
        const {
            size = 'm',
            color = 'inherit',
            variant = 'default',
            truncate = false,
            disabled = false,
            className,
        } = props;

        return classNames(
            'link',
            `link--size-${size}`,
            `link--variant-${variant}`,
            { 'link--truncate': truncate },
            { 'link--disabled': disabled },
            { [`link--color-${color}`]: color != null },
            className,
        );
    };
}

export const linkUtils = new LinkUtils();
