import { Breadcrumbs, Page } from '@0xforkitall/ui-kit';
import { metadataUtils } from '@0xforkitall/ui-kit-nextjs';
import { TokenPrices } from '@components/token-prices';
import { Route, routes } from '@constants/routes';
import type { Metadata } from 'next';
import { NewestSection } from './sections/newest-section';

export const metadata: Metadata = metadataUtils.generate({
    title: '0xforkitall - Crypto, Blockchain, NFT, and Frontend Development Insights',
    description:
        'Explore the in-depth technical information and implementation details about crypto, blockchain, NFTs, and frontend development by 0xforkitall, an expert frontend blockchain developer. Stay updated with the latest insights and advancements in the world of blockchain technology, cryptocurrencies, and frontend development strategies.',
});

const breadcrumbsRoutes = [
    { url: routes[Route.LANDING_PAGE].url, label: routes[Route.LANDING_PAGE].label },
    { url: routes[Route.BLOG].url, label: routes[Route.BLOG].label },
];

export const BlogPage = () => {
    return (
        <Page gap="150">
            <Breadcrumbs routes={breadcrumbsRoutes} />
            <TokenPrices />
            <NewestSection />
        </Page>
    );
};
