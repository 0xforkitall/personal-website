import { Route } from '@constants/routes';

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
    route: Route;
    /**
     * Disables the link when set to true.
     */
    disabled?: boolean;
}

export const topbarLinks: ITopbarLink[] = [
    { id: 'blog', name: '// blog', route: Route.BLOG },
    { id: 'about', name: '// about', route: Route.ABOUT },
];
