import type { IServiceBaseQueryParams } from '@shared';

export interface IGetTokensParams extends IServiceBaseQueryParams<IGetTokensQueryParams> {}

export interface IGetTokensQueryParams {
    /**
     * Optionally specify the number of results to return.
     * @default 100
     */
    limit?: number;
}
