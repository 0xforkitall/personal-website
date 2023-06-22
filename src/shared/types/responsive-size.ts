/**
 * Used by components for responsive attributes.
 */
export interface IResponsiveAttribute<TValue> {
    /**
     * Attribute applied on XXL breakpoint.
     */
    xxl?: TValue;
    /**
     * Attribute applied on XL breakpoint.
     */
    xl?: TValue;
    /**
     * Attribute applied on L breakpoint.
     */
    lg?: TValue;
    /**
     * Attribute applied on M breakpoint.
     */
    md?: TValue;
    /**
     * Attribute applied on S breakpoint.
     */
    sm?: TValue;
    /**
     * Attribute applied on XS breakpoint.
     */
    xs?: TValue;
}
