import { type IResponsiveAttribute } from '../../types';

export interface IResponsiveClassnamesParams<TResponsiveValue> {
    /**
     * Prefix of the component including the component name and variant, e.g. 'layout--direction';
     */
    prefix: string;
    /**
     * Value to generate the default / non-responsive classname.
     */
    value?: string;
    /**
     * Responsive properties to generate the classnames from.
     * @default {}
     */
    prop?: IResponsiveAttribute<TResponsiveValue>;
}

class ResponsiveUtils {
    /**
     * Generates the responsive classnames given the component prefix and responsive props
     * @param prefix The prefix of the classnames (e.g. "layout--direction")
     * @param responsiveProp The property that changes based on the breakpoint
     * @returns A list of responsive classnames, e.g. ['layout--direction-xs-row', 'layout--direction-l-column']
     */
    responsiveClassnames = <TResponsiveValue>(params: IResponsiveClassnamesParams<TResponsiveValue>): string => {
        const { prefix, prop = {}, value } = params;

        const defaultClassname = value ? `${prefix}-${value}` : '';

        return Object.keys(prop)
            .map((breakpoint) => `${prefix}-${breakpoint}-${(prop as Record<string, string>)[breakpoint]}`)
            .concat(defaultClassname)
            .join(' ');
    };
}

export const responsiveUtils = new ResponsiveUtils();
