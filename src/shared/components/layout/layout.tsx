import { responsiveUtils } from '@shared/utils';
import classNames from 'classnames';
import { forwardRef } from 'react';
import { type ILayoutProps } from './layout.api';

export const Layout = forwardRef<HTMLDivElement, ILayoutProps>((props, ref) => {
    const {
        display = 'flex',
        gap,
        rowGap,
        direction,
        responsiveDirection,
        alignItems,
        justifyContent,
        grow,
        shrink,
        wrap,
        basis,
        fullWidth,
        children,
        className,
        ...other
    } = props;

    return (
        <div
            ref={ref}
            className={classNames(
                'layout',
                `layout--display-${display}`,
                { 'layout--full-width': fullWidth },
                { [`layout--gap-${gap}`]: gap != null },
                { [`layout--row-gap-${rowGap}`]: rowGap != null },
                { [`layout--align-items-${alignItems}`]: alignItems != null },
                { [`layout--flex-wrap-${wrap}`]: wrap != null },
                { [`layout--flex-basis-${basis}`]: basis != null },
                { [`layout--justify-content-${justifyContent}`]: justifyContent != null },
                { [`layout--flex-grow-${grow}`]: grow != null },
                { [`layout--flex-shrink-${shrink}`]: shrink != null },
                responsiveUtils.responsiveClassnames({
                    prefix: 'layout--flex-direction',
                    prop: responsiveDirection,
                    value: direction,
                }),
                className,
            )}
            {...other}
        >
            {children}
        </div>
    );
});

Layout.displayName = 'Layout';
