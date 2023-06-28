import { invariantUtils, type InvariantUtils } from './invariant-utils';

type PathParams<Key extends string = string> = {
    readonly [key in Key]: string | undefined;
};

class RouterUtils {
    generatePath = (path: string, params: PathParams = {}) => {
        return path
            .replace(/\/:(\w+)\?/g, (_, key) => (params[key] ? `/${params[key]}` : ''))
            .replace(/\/:(\w+)/g, (_, key) => {
                const invariant: InvariantUtils['invariant'] = invariantUtils.invariant;
                invariant(params[key] != null, `Missing ":${key}" param`);

                return `/${params[key]}`;
            })
            .replace(/\/*\*$/, () => (params['*'] == null ? '' : params['*'].replace(/^\/*/, '/')));
    };

    matchPath = (route: string, pathname: string) => {
        const processedRoute = this.generatePath(route);

        return processedRoute === pathname;
    };
}

export const routerUtils = new RouterUtils();
