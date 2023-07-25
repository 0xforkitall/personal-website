import type { IToken } from '@api/token-service';
import { Image, Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import styles from './token.module.scss';

export interface ITokenProps {
    /**
     * Token to be rendered.
     */
    token: IToken;
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const Token: React.FC<ITokenProps> = async ({ token, className }) => {
    return (
        <Layout
            direction="row"
            className={classNames(styles.token, className)}
            alignItems="center"
            gap="100"
            shrink="0"
        >
            <Image
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${token.id}.png`}
                width={32}
                height={32}
                alt={`${token.name} logo`}
            />
            <Layout key={token.id} direction="column" gap="0">
                <Layout gap="50" direction="row" alignItems="baseline">
                    <Text fontWeight="bold" color="white" size="m">
                        {token.name}
                    </Text>
                    <Text color="muted" size="s">
                        ({token.symbol})
                    </Text>
                </Layout>
                <Layout gap="50" direction="row" alignItems="baseline">
                    <Text color="white" size="m">
                        ${token.usdPrice.toFixed(2)}
                    </Text>
                    <Text size="s" colorValue={token.priceChange}>
                        {token.priceChange.toFixed(2)}%
                    </Text>
                </Layout>
            </Layout>
        </Layout>
    );
};
