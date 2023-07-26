export enum DateFormat {
    DATE_TIME_LONG = 'DATE_TIME_LONG',
    DATE_LONG = 'DATE_LONG',
    DATE_SHORT = 'DATE_SHORT',
}

export interface IFormatNumberOptions {
    /**
     * Fraction digits to display.
     * @default 2
     */
    fractionDigits?: number;
    /**
     * Format the number as currency when set to true.
     */
    isCurrency?: boolean;
    /**
     * Format the number as percentage when set to true.
     */
    isPercent?: boolean;
}
