export interface IBreadcrumbsRoute {
    /**
     * Url of the breadcrumbs route.
     */
    url: string;
    /**
     * Parameters of the url.
     */
    urlParams?: Record<string, string>;
    /**
     * Label displayed on the breadcrumbs component.
     */
    label: string;
}

export interface IBreadcrumbsProps {
    /**
     * Routes of the breadcrumbs rendered in order.
     */
    routes: IBreadcrumbsRoute[];
    /**
     * Custom class for the component.
     */
    className?: string;
}

export interface IBreadcrumbsSeoProps extends Pick<IBreadcrumbsProps, 'routes'> {}
