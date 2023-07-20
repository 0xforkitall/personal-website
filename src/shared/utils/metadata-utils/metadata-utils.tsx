import type { Metadata } from 'next';
import { routerUtils } from '../router-utils';

export interface IGenerateMetadataParams {
    /**
     * Title of the page.
     */
    title: string;
    /**
     * Description of the page.
     */
    description: string;
    /**
     * Relative url of the page image.
     * @default "/logo.png"
     */
    image?: string;
    /**
     * Open graph values.
     */
    openGraph?: Metadata['openGraph'];
}

class MetadataUtils {
    generate = ({ title, description, image = '/logo.png', openGraph }: IGenerateMetadataParams): Metadata => {
        const twitterImage = routerUtils.generatePath(image, undefined, { absoluteUrl: true });

        return {
            metadataBase: new URL(process.env.NEXT_PUBLIC_HOST!),
            title,
            description,
            openGraph: { images: [image], ...openGraph },
            twitter: {
                card: 'summary',
                title,
                description,
                images: [twitterImage],
            },
        };
    };
}

export const metadataUtils = new MetadataUtils();
