import { blogService } from '@api';
import { Route, routes } from '@constants/routes';
import { routerUtils } from '@shared';

export default async function sitemap() {
    const posts = blogService.getAllPosts();

    const blogPostRoutes = posts.map(({ slug, updatedAt }) => ({
        url: routerUtils.generatePath(routes[Route.BLOG_POST].url, { slug }, { absoluteUrl: true }),
        lastModified: updatedAt,
    }));

    const staticRoutes = [routes[Route.LANDING_PAGE].url, routes[Route.ABOUT].url, routes[Route.BLOG].url].map(
        (route) => ({
            url: routerUtils.generatePath(route, undefined, { absoluteUrl: true }),
            lastModified: new Date().toISOString(),
        }),
    );

    return [...staticRoutes, ...blogPostRoutes];
}
