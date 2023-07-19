import { Route, routes } from '@constants/routes';
import { Breadcrumbs, Layout, Page, metadataUtils } from '@shared';
import type { Metadata } from 'next';
import styles from './about-page.module.scss';
import { AboutSection } from './sections/about-section';
import { ContactSection } from './sections/contact-section';
import { SkillsSection } from './sections/skills-section';

export const metadata: Metadata = metadataUtils.generate({
    title: '0xforkitall - Expert Blockchain Frontend Developer | About Me',
    description:
        "Learn more about 0xforkitall, a frontend developer and blockchain specialist. Discover my skills, experience, and passion for building innovative web solutions. Let's connect and explore opportunities to work together.",
});

const breadcrumbsRoutes = [
    { url: routes[Route.LANDING_PAGE].url, label: routes[Route.LANDING_PAGE].label },
    { url: routes[Route.ABOUT].url, label: routes[Route.ABOUT].label },
];

export const AboutPage = () => {
    return (
        <Page className={styles.aboutPage} gap="150">
            <Breadcrumbs routes={breadcrumbsRoutes} />
            <Layout direction="column" gap="0">
                <AboutSection className={styles.landingPageSection} />
                <SkillsSection className={styles.landingPageSection} />
                <ContactSection className={styles.landingPageSection} />
            </Layout>
        </Page>
    );
};
