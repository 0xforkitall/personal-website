import { Page } from '@shared';
import type { Metadata } from 'next';
import { NewestSection } from './sections/newest-section';

export const metadata: Metadata = {
    title: '0xforkitall - Crypto, Blockchain, NFT, and Frontend Development Insights',
    description:
        'Explore the in-depth technical information and implementation details about crypto, blockchain, NFTs, and frontend development by 0xforkitall, an expert frontend blockchain developer. Stay updated with the latest insights and advancements in the world of blockchain technology, cryptocurrencies, and frontend development strategies.',
    openGraph: { images: ['logo.png'] },
};

export const BlogPage = () => {
    return (
        <Page>
            <NewestSection />
        </Page>
    );
};
