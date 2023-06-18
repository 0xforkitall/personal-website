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
    l?: TValue;
    /**
     * Attribute applied on M breakpoint.
     */
    m?: TValue;
    /**
     * Attribute applied on S breakpoint.
     */
    s?: TValue;
    /**
     * Attribute applied on XS breakpoint.
     */
    xs?: TValue;
}
