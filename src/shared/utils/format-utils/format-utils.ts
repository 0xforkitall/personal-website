import { formatOptionsDate } from './format-options-date';
import { DateFormat } from './format-utils.api';

class FormatUtils {
    private locale = 'en-GB';
    private cache: Record<string, Intl.DateTimeFormat> = {};

    formatDate = (date: string, format = DateFormat.DATE_TIME_LONG) => {
        const cacheKey = `${this.locale}-${format}`;
        const wrappedDate = new Date(date);

        if (!this.cache[cacheKey]) {
            this.cache[cacheKey] = Intl.DateTimeFormat(this.locale, formatOptionsDate[format]);
        }

        return this.cache[cacheKey]!.format(wrappedDate);
    };
}

export const formatUtils = new FormatUtils();
