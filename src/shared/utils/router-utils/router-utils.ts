import { invariant } from '../invariant-utils';

export interface IGeneratePathOptions {
    /**
     * Returns the absolute url when set to true.
     */
    absoluteUrl?: boolean;
    /**
     * Appends the specified query parameters when set.
     */
    query?: Record<string, string | number> | URLSearchParams;
}

class RouterUtils {
    generatePath = (
        path: string,
        params: Record<string, string | undefined> = {},
        options: IGeneratePathOptions = {},
    ) => {
        const { absoluteUrl, query } = options;

        let url = path
            // Replace optional parameters with either their value or empty string
            .replace(/\/:(\w+)\?/g, (_, key) => (params[key] ? `/${params[key]}` : ''))
            // Replace required parameters with their value or throw error when value is missing
            .replace(/\/:(\w+)/g, (_, key) => {
                invariant(params[key] != null, `Missing ":${key}" param`);

                return `/${params[key]}`;
            });

        if (query) {
            const parsedParams =
                query instanceof URLSearchParams
                    ? query
                    : Object.keys(query).reduce((obj, key) => ({ ...obj, [key]: query[key]?.toString() }), {});
            const queryParams = new URLSearchParams(parsedParams).toString();
            url = `${url}?${queryParams}`;
        }

        if (absoluteUrl) {
            url = `${process.env.NEXT_PUBLIC_HOST}${url}`;
        }

        return url;
    };

    matchPath = (routes: string[], pathname: string) =>
        routes.some((route) => pathname.match(this.compilePath(route)) != null);

    private compilePath = (path: string): RegExp => {
        const routeRegexp = path
            .replace(/[\\.*+^$?{}|()[\]]/g, '\\$&') // Escape special regex chars
            .replace(/\/:(\w+)/g, '/([^\\/]+)'); // Replace path parameters with regexp groups

        const matcher = new RegExp(`^${routeRegexp}$`, 'i');

        return matcher;
    };
}

export const routerUtils = new RouterUtils();
