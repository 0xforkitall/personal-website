/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        const svgLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

        config.module.rules.push(
            {
                ...svgLoaderRule,
                test: /\.svg$/i,
                resourceQuery: /url/, // *.svg?url
            },

            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                resourceQuery: { not: /url/ }, // exclude if *.svg?url
                use: ['@svgr/webpack'],
            },
        );

        svgLoaderRule.exclude = /\.svg$/i;

        return config;
    },
};

module.exports = nextConfig;
