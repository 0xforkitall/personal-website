import { IconType } from '@shared';

export interface IPersonalSocial {
    /**
     * Id of the social.
     */
    id: string;
    /**
     * Icon of the social.
     */
    icon: IconType;
    /**
     * Link to the social.
     */
    link: string;
}

export const personalSocials: IPersonalSocial[] = [
    { id: 'twitter', icon: IconType.SOCIAL_TWITTER, link: 'https://twitter.com/0xforkitall' },
    { id: 'github', icon: IconType.SOCIAL_GITHUB, link: 'https://github.com/0xforkitall' },
    { id: 'reddit', icon: IconType.SOCIAL_REDDIT, link: 'https://www.reddit.com/user/0xforkitall' },
];
