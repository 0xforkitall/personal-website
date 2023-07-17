import { DateFormat } from './format-utils.api';

export const formatOptionsDate: Record<DateFormat, Intl.DateTimeFormatOptions> = {
    [DateFormat.DATE_TIME_LONG]: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    },
    [DateFormat.DATE_LONG]: {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    },
    [DateFormat.DATE_SHORT]: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    },
};
