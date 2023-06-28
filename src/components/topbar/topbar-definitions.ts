import { routes } from '@constants/routes';

export interface ITopbarLink {
    /**
     * Id of the link.
     */
    id: string;
    /**
     * Name of the link rendered.
     */
    name: string;
    /**
     * Route of the link.
     */
    route: string;
    /**
     * Disables the link when set to true.
     */
    disabled?: boolean;
}

export const topbarLinks: ITopbarLink[] = [
    { id: 'home', name: '// home', route: routes.landingPage },
    { id: 'blog', name: '// blog', route: routes.blog, disabled: process.env.NEXT_PUBLIC_ENVIRONMENT === 'production' },
];
