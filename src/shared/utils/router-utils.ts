import { invariantUtils, type InvariantUtils } from './invariant-utils';

export interface IGeneratePathOptions {
    /**
     * Returns the absolute url when set to true.
     */
    absoluteUrl?: boolean;
}

class RouterUtils {
    generatePath = (
        path: string,
        params: Record<string, string | undefined> = {},
        options: IGeneratePathOptions = {},
    ) => {
        const { absoluteUrl } = options;

        const relativeUrl = path
            // Replace optional parameters with either their value or empty string
            .replace(/\/:(\w+)\?/g, (_, key) => (params[key] ? `/${params[key]}` : ''))
            // Replace required parameters with their value or throw error when value is missing
            .replace(/\/:(\w+)/g, (_, key) => {
                const invariant: InvariantUtils['invariant'] = invariantUtils.invariant;
                invariant(params[key] != null, `Missing ":${key}" param`);

                return `/${params[key]}`;
            });

        return absoluteUrl ? `${process.env.NEXT_PUBLIC_HOST}${relativeUrl}` : relativeUrl;
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
