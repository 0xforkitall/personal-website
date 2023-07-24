import type { ICmcTokenQuote } from './cmc-token-quote';

/**
 * Token data coming from CoinMarkedCap.
 */
export interface ICmcToken<TQuote extends string = 'USD'> {
    /**
     * Id of the token.
     */
    id: string;
    /**
     * Name of the token.
     */
    name: string;
    /**
     * Symbol of the token.
     */
    symbol: string;
    /**
     * Quote of the token.
     */
    quote: Record<TQuote, ICmcTokenQuote>;
}
