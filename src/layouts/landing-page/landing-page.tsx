import { Canvas } from '@components/canvas';
import { ButtonLink, IconType, Layout, Page, Text } from '@shared';
import type { Metadata } from 'next';
import { LandingPageModel } from './landing-page-model';
import styles from './landing-page.module.scss';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_HOST!),
    title: '0xforkitall - Expert Blockchain Frontend Developer | Work with Me',
    description:
        "Looking for a skilled frontend developer specializing in blockchain technology? Explore the expertise of 0xforkitall. Get in touch and collaborate on your next project. Let's build something amazing together.",
    openGraph: { images: ['/logo.png'] },
};

export const LandingPage = () => {
    return (
        <Page variant="no-spacing" grow="1" className={styles.landingPage}>
            <Layout direction="column" gap="400" alignItems="start" className={styles.hero}>
                <Layout direction="column" gap="0">
                    <Text size="h1" responsiveSize={{ sm: 'h2' }}>
                        <Text tag="span">Hi, I&apos;m </Text>
                        <Text tag="span" color="primary">
                            0xforkitall
                        </Text>
                        <Text tag="span">,</Text>
                    </Text>
                    <Text size="h3" responsiveSize={{ xs: 'h5' }}>
                        and I&apos;m a Blockchain Frontend Developer
                    </Text>
                </Layout>
                <ButtonLink
                    variant="primary"
                    href="mailto:0xforkitall@gmail.com"
                    target="_blank"
                    icon={IconType.ARROW_RIGHT}
                >
                    Work with me
                </ButtonLink>
            </Layout>
            <Canvas>
                <LandingPageModel />
            </Canvas>
        </Page>
    );
};
