import { ServiceBase } from '@0xforkitall/ui-kit';
import type { IToken } from './domain';
import type { IGetTokensParams } from './token-service.api';

export const url = {
    tokens: '/tokens',
};

class TokenService extends ServiceBase {
    constructor() {
        super({ context: `${process.env.NEXT_PUBLIC_HOST!}/api` });
    }

    getTokens = async (params: IGetTokensParams): Promise<IToken[]> => {
        const { queryParams } = params;
        const data = await this.fetch<IToken[]>(url.tokens, { queryParams: { ...queryParams } });

        return data;
    };
}

export const tokenService = new TokenService();
