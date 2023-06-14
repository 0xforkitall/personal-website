import '@shared/index.scss';
import React, { type ReactNode } from 'react';

export interface IRootLayoutProps {
    /**
     * Children of the component.
     */
    children?: ReactNode;
}

export const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body id="root">{children}</body>
        </html>
    );
};
