import { Footer } from '@components/footer';
import { Topbar } from '@components/topbar';
import { Layout } from '@shared';
import '@shared/index.scss';
import React, { type ReactNode } from 'react';
import styles from './root-layout.module.css';

export interface IRootLayoutProps {
    /**
     * Children of the component.
     */
    children?: ReactNode;
}

export const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body id="root">
                <Topbar />
                <Layout className={styles.rootLayoutPage}>{children}</Layout>
                <Footer />
            </body>
        </html>
    );
};
