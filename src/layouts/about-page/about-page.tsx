import { Page } from '@shared';
import type { Metadata } from 'next';
import styles from './about-page.module.scss';
import { AboutSection } from './sections/about-section';
import { ContactSection } from './sections/contact-section';
import { SkillsSection } from './sections/skills-section';

export const metadata: Metadata = {
    title: '0xforkitall - Expert Blockchain Frontend Developer | About Me',
    description:
        "Learn more about 0xforkitall, a frontend developer and blockchain specialist. Discover my skills, experience, and passion for building innovative web solutions. Let's connect and explore opportunities to work together.",
    openGraph: { images: ['logo.png'] },
};

export const AboutPage = () => {
    return (
        <Page className={styles.aboutPage}>
            <AboutSection className={styles.landingPageSection} />
            <SkillsSection className={styles.landingPageSection} />
            <ContactSection className={styles.landingPageSection} />
        </Page>
    );
};
