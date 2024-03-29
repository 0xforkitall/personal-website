'use client';

import { routerUtils } from '@0xforkitall/ui-kit';
import { type IBlogPost } from '@api/blog-service';
import { Route, routes } from '@constants/routes';
import { ArticleJsonLd } from 'next-seo';

export interface IBlogPostPageSeoProps {
    /**
     * Blog post to render the SEO tags for.
     */
    blogPost: IBlogPost;
}

export const BlogPostPageSeo = (props: IBlogPostPageSeoProps) => {
    const { blogPost } = props;
    const blogPostUrl = routerUtils.generatePath(
        routes[Route.BLOG_POST].url,
        { slug: blogPost.slug },
        { absoluteUrl: true },
    );

    return (
        <ArticleJsonLd
            type="BlogPosting"
            useAppDir={true}
            url={blogPostUrl}
            title={blogPost.title}
            description={blogPost.description}
            authorName={blogPost.author.displayName}
            images={[blogPost.image]}
            datePublished={blogPost.createdAt}
            dateModified={blogPost.updatedAt}
        />
    );
};
