import { tokenService } from '@api/token-service/token-service';
import { Layout } from '@shared';
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

    if (isError || tokenPrices == null) {
        return null;
    }

    return (
        <Layout className={classNames(styles.tokenPrices, className)}>
            <Layout className={styles.tokenList} direction="row" gap="500">
                {tokenPrices.map((token) => (
                    <Token key={token.id} token={token} />
                ))}
            </Layout>
        </Layout>
    );
};
