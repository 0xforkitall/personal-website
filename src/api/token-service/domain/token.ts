/**
 * Token interface used across the application.
 */
export interface IToken {
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
     * Price of the token in USD.
     */
    usdPrice: number;
    /**
     * Price change in percentage of the token during the last 24h.
     */
    priceChange: number;
}
