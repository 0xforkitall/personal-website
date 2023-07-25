import type { IToken } from '@api/token-service';
import { logger } from '@server/utils/logger';
import { ServerError } from '@server/utils/server-error';
import { ServiceBase } from '@shared';
import { NextResponse, type NextRequest } from 'next/server';
import type { ICmcResponse, ICmcToken } from './domain';

export const url = {
    tokens: '/cryptocurrency/listings/latest',
};

class CmcService extends ServiceBase {
    constructor() {
        super({ context: 'https://pro-api.coinmarketcap.com/v1' });
    }

    getTokens = async (request: NextRequest): Promise<NextResponse<IToken[] | ServerError>> => {
        const { searchParams: queryParams } = request.nextUrl;
        const headers = { 'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY! };
        const options = { headers };

        try {
            const { data } = await this.fetch<ICmcResponse<ICmcToken[]>>(url.tokens, { options, queryParams });
            const parsedData = data.map(this.cmcTokenToToken);

            return NextResponse.json(parsedData);
        } catch (error: unknown) {
            logger.error(`CmcService: Error fetching tokens`, error);
            const serverError = new ServerError({ message: 'unknown-error', code: 500 });

            return NextResponse.json(serverError, { status: serverError.code });
        }
    };

    private cmcTokenToToken = (token: ICmcToken): IToken => ({
        id: token.id,
        name: token.name,
        symbol: token.symbol,
        usdPrice: token.quote.USD.price,
        priceChange: token.quote.USD.percent_change_24h,
    });
}

export const cmcService = new CmcService();
