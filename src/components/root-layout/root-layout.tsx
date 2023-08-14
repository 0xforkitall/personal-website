import { Layout } from '@0xforkitall/ui-kit';
import '@0xforkitall/ui-kit-nextjs/styles.scss';
import '@0xforkitall/ui-kit/styles.scss';
import { Footer } from '@components/footer';
import { Topbar } from '@components/topbar';
import { Analytics } from '@vercel/analytics/react';
import React, { type ReactNode } from 'react';
import styles from './root-layout.module.scss';

export interface IRootLayoutProps {
    /**
     * Children of the component.
     */
    children?: ReactNode;
}

export const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body id="root" className={styles.rootLayout}>
                <Topbar />
                <Layout className={styles.rootLayoutPage} grow="1">
                    {children}
                </Layout>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
};
