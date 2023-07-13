export interface IRouteDefinition {
    /**
     * Url displayed on the browser.
     */
    url: string;
    /**
     * Label of the route displayed on the breadcrumbs component.
     */
    label: string;
    /**
     * Children of the route for active links, breadcrumb component and so on.
     */
    children?: Route[];
}

export enum Route {
    LANDING_PAGE = 'LANDING_PAGE',
    ABOUT = 'ABOUT',
    BLOG = 'BLOG',
    BLOG_POST = 'BLOG_POST',
}

export const routes: Record<Route, IRouteDefinition> = {
    [Route.LANDING_PAGE]: { url: '/', children: [Route.ABOUT, Route.BLOG], label: 'Home' },
    [Route.ABOUT]: { url: '/about', label: 'About' },
    [Route.BLOG]: { url: '/blog', children: [Route.BLOG_POST], label: 'Blog' },
    [Route.BLOG_POST]: { url: '/blog/:slug', label: '' },
};
