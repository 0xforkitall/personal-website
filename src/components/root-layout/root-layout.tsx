import React, { type ReactNode } from 'react';
import '../../shared/index.scss';

export interface IRootLayoutProps {
    /**
     * Children of the component.
     */
    children?: ReactNode;
}

export const RootLayout: React.FC<IRootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
};
