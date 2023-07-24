/**
 * See status object: https://coinmarketcap.com/api/documentation/v1/#section/Standards-and-Conventions
 */
export interface ICmcResponseStatus {
    timestamp: string;
    error_code: number;
}
