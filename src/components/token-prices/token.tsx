import type { IToken } from '@api/token-service';
import { Image, Layout, Text, formatUtils } from '@shared';
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
    const { id, name, symbol, usdPrice, priceChange } = token;

    const formattedPrice = formatUtils.formatNumber(usdPrice, { isCurrency: true });
    const formattedChange = formatUtils.formatNumber(priceChange, { isPercent: true });

    return (
        <Layout
            direction="row"
            className={classNames(styles.token, className)}
            alignItems="center"
            gap="100"
            shrink="0"
        >
            <Image
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id}.png`}
                width={32}
                height={32}
                alt={`${name} logo`}
            />
            <Layout key={token.id} direction="column" gap="0">
                <Layout gap="50" direction="row" alignItems="baseline">
                    <Text fontWeight="bold" color="white" size="m">
                        {name}
                    </Text>
                    <Text color="muted" size="s">
                        ({symbol})
                    </Text>
                </Layout>
                <Layout gap="50" direction="row" alignItems="baseline">
                    <Text color="white" size="m">
                        {formattedPrice}
                    </Text>
                    <Text size="s" colorValue={token.priceChange}>
                        {formattedChange}
                    </Text>
                </Layout>
            </Layout>
        </Layout>
    );
};
