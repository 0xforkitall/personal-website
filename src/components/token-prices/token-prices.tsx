import { Layout } from '@0xforkitall/ui-kit';
import { tokenService } from '@api/token-service/token-service';
import { InfiniteCarousel } from '@components/infinite-carousel';
import classNames from 'classnames';
import React from 'react';
import { Token } from './token';
import styles from './token-prices.module.scss';

export interface ITokenPricesProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

const getTokens = async () => {
    try {
        const queryParams = { limit: 10 };
        const tokenPrices = await tokenService.getTokens({ queryParams });

        return { data: tokenPrices };
    } catch (error: unknown) {
        return { data: undefined, isError: true, error };
    }
};

export const TokenPrices: React.FC<ITokenPricesProps> = async ({ className }) => {
    const { data: tokenPrices, isError } = await getTokens();

    if (Boolean(isError) || tokenPrices == null) {
        return null;
    }

    return (
        <Layout className={classNames(styles.tokenPrices, className)}>
            <InfiniteCarousel direction="row" gap="500">
                {tokenPrices.map((token) => (
                    <Token key={token.id} token={token} />
                ))}
            </InfiniteCarousel>
        </Layout>
    );
};
