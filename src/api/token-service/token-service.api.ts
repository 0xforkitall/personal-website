import type { IServiceBaseQueryParams } from '@0xforkitall/ui-kit';

export interface IGetTokensParams extends IServiceBaseQueryParams<IGetTokensQueryParams> {}

export interface IGetTokensQueryParams {
    /**
     * Optionally specify the number of results to return.
     * @default 100
     */
    limit?: number;
}
