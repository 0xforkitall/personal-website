import { Container } from '@shared';
import { NewestSection } from './sections/newest-section';

export const metadata = {
    title: '0xforkitall - Crypto, Blockchain, NFT, and Frontend Development Insights',
    description:
        'Explore the in-depth technical information and implementation details about crypto, blockchain, NFTs, and frontend development by 0xforkitall, an expert frontend blockchain developer. Stay updated with the latest insights and advancements in the world of blockchain technology, cryptocurrencies, and frontend development strategies.',
};

export const BlogPage = () => {
    return (
        <Container direction="column" gap="0">
            <NewestSection />
        </Container>
    );
};
