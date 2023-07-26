import { formatOptionsDate } from './format-options-date';
import { DateFormat, type IFormatNumberOptions } from './format-utils.api';

class FormatUtils {
    private locale = 'en-GB';
    private currency = 'USD';

    private dateCache: Record<string, Intl.DateTimeFormat> = {};
    private numberCache: Record<string, Intl.NumberFormat> = {};

    formatDate = (date: string, format = DateFormat.DATE_TIME_LONG) => {
        const cacheKey = `date/${this.locale}/${format}`;
        const wrappedDate = new Date(date);

        if (!this.dateCache[cacheKey]) {
            this.dateCache[cacheKey] = Intl.DateTimeFormat(this.locale, formatOptionsDate[format]);
        }

        return this.dateCache[cacheKey]!.format(wrappedDate);
    };

    formatNumber = (value: string | number, options: IFormatNumberOptions = {}) => {
        const { fractionDigits = 2, isCurrency, isPercent } = options;

        const parsedValue = typeof value === 'string' ? parseFloat(value) : value;
        const processedValue = isPercent ? parsedValue / 100 : parsedValue;

        const style = isCurrency ? 'currency' : isPercent ? 'percent' : 'decimal';

        const cacheKey = `number/${style}/${this.locale}/${fractionDigits}`;

        if (!this.numberCache[cacheKey]) {
            this.numberCache[cacheKey] = new Intl.NumberFormat(this.locale, {
                style,
                currency: this.currency,
                currencyDisplay: 'narrowSymbol',
                maximumFractionDigits: fractionDigits,
                minimumFractionDigits: fractionDigits,
            });
        }

        return this.numberCache[cacheKey]!.format(processedValue);
    };
}

export const formatUtils = new FormatUtils();
