import { ButtonLink, Layout, Text } from '@shared';
import classNames from 'classnames';
import React from 'react';
import styles from './contact-section.module.scss';

export interface IContactSectionProps {
    /**
     * Custom class for the component.
     */
    className?: string;
}

export const ContactSection: React.FC<IContactSectionProps> = ({ className }) => {
    return (
        <Layout
            className={classNames(styles.contactSection, className)}
            direction="row"
            responsiveDirection={{ sm: 'column' }}
        >
            <Layout className={classNames(styles.contactBlock, styles.contactBlockEnd)} />
            <Layout gap="150" direction="column" alignItems="center" className={styles.contactSectionContent}>
                <Text size="h3" className={styles.contactHeader}>
                    Get in touch
                </Text>
                <Text size="l">
                    Ready to join forces? Simply drop me an email, and let&apos;s have a chat about your exciting idea!
                </Text>
                <ButtonLink
                    className={styles.contactCta}
                    variant="primary"
                    href="mailto:0xforkitall@gmail.com"
                    target="_blank"
                >
                    Contact me
                </ButtonLink>
            </Layout>
            <Layout className={classNames(styles.contactBlock, styles.contactBlockStart)} />
        </Layout>
    );
};
