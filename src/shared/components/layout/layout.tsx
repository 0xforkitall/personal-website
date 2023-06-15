import classNames from 'classnames';
import { forwardRef } from 'react';
import { type ILayoutProps } from './layout.api';

export const Layout = forwardRef<HTMLDivElement, ILayoutProps>((props, ref) => {
    const {
        display = 'flex',
        gap,
        rowGap,
        direction,
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
                { [`layout--direction-${direction}`]: direction != null },
                { [`layout--row-gap-${rowGap}`]: rowGap != null },
                { [`layout--align-items-${alignItems}`]: alignItems != null },
                { [`layout--wrap-${wrap}`]: wrap != null },
                { [`layout--basis-${basis}`]: basis != null },
                { [`layout--justify-content-${justifyContent}`]: justifyContent != null },
                { [`layout--grow-${grow}`]: grow != null },
                { [`layout--shrink-${shrink}`]: shrink != null },
                className,
            )}
            {...other}
        >
            {children}
        </div>
    );
});

Layout.displayName = 'Layout';
