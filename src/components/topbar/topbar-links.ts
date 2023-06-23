import { routes } from '@constants/routes';

export interface ITopbarLink {
    id: string;
    name: string;
    disabled?: boolean;
    route: string;
}

export const topbarLinks: ITopbarLink[] = [
    { id: 'home', name: 'home', route: routes.landingPage },
    { id: 'blog', name: 'blog', disabled: true, route: '#' },
];
