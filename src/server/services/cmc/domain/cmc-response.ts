import type { ICmcResponseStatus } from './cmc-response-status';

export interface ICmcResponse<TData> {
    /**
     * Status of the request.
     */
    status: ICmcResponseStatus;
    /**
     * Data returned by CMC.
     */
    data: TData;
}
