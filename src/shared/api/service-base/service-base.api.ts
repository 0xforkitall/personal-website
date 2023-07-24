export interface IServiceBaseParams {
    /**
     * Context of the service used for building the URL on the fetch request (e.g. https://pro-api.coinmarketcap.com)
     */
    context: string;
}

export interface IServiceBaseFetchParams {
    /**
     * Path parameters to build the URL to fetch.
     */
    pathParams?: Record<string, string>;
    /**
     * Query parameters of the fetch request.
     */
    queryParams?: Record<string, string | number> | URLSearchParams;
    /**
     * Options for the fetch request.
     */
    options?: RequestInit;
}

/**
 * Interface for functions accepting only query parameters.
 */
export interface IServiceBaseQueryParams<TQueryParams> {
    queryParams: TQueryParams;
}

/**
 * Interface for functions accepting only query and path parameters.
 */
export interface IServiceBaseQueryPathParams<TQueryParams, TPathParams> {
    queryParams: TQueryParams;
    pathParams: TPathParams;
}
