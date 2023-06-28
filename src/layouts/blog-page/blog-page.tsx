import { Container } from '@shared';
import { HeroSection } from './sections/hero-section';
import { ListsSection } from './sections/lists-section';

export const metadata = {
    title: '0xforkitall - Expert Blockchain Frontend Developer | Innovative Solutions for the Decentralized World',
    description:
        "Discover the expertise of 0xforkitall, a seasoned frontend developer specializing in the blockchain space. With a deep understanding of blockchain technology and its frontend intricacies, 0xforkitall offers innovative solutions for decentralized applications. Explore a portfolio showcasing 0xforkitall's exceptional skills in building intuitive and user-friendly interfaces for blockchain platforms. Harness the power of the decentralized world with 0xforkitall's expertise in frontend development. Contact 0xforkitall today to discuss your blockchain project requirements and unlock the true potential of decentralized applications.",
};

export const BlogPage = () => {
    return (
        <Container direction="column" gap="400">
            <HeroSection />
            <ListsSection />
        </Container>
    );
};
