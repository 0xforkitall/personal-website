import { blogService } from '@api';
import { routes } from '@constants/routes';
import { routerUtils } from '@shared';

export default async function sitemap() {
    const posts = blogService.getAllPosts();

    const blogPostRoutes = posts.map(({ slug, updatedAt }) => ({
        url: routerUtils.generatePath(routes.blogPost, { slug }, { absoluteUrl: true }),
        lastModified: updatedAt,
    }));

    const staticRoutes = [routes.landingPage, routes.about, routes.blog].map((route) => ({
        url: routerUtils.generatePath(route, undefined, { absoluteUrl: true }),
        lastModified: new Date().toISOString(),
    }));

    return [...staticRoutes, ...blogPostRoutes];
}
