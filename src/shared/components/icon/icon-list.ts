import { lazy, type FC, type LazyExoticComponent, type SVGProps } from 'react';
import { IconType } from './icon-type';

type LazyIcon = LazyExoticComponent<FC<SVGProps<SVGSVGElement>>>;

export const iconList: Record<IconType, LazyIcon> = {
    [IconType.ARROW_RIGHT]: lazy(() => import('../../assets/icons/arrow-right.svg')),
    [IconType.ATOM]: lazy(() => import('../../assets/icons/atom.svg')),
    [IconType.CPU]: lazy(() => import('../../assets/icons/cpu.svg')),
    [IconType.CUBE]: lazy(() => import('../../assets/icons/cube.svg')),
    [IconType.MOON]: lazy(() => import('../../assets/icons/moon.svg')),
    [IconType.SOCIAL_GITHUB]: lazy(() => import('../../assets/icons/social-github.svg')),
    [IconType.SOCIAL_REDDIT]: lazy(() => import('../../assets/icons/social-reddit.svg')),
    [IconType.SOCIAL_TWITTER]: lazy(() => import('../../assets/icons/social-twitter.svg')),
    [IconType.SUN]: lazy(() => import('../../assets/icons/sun.svg')),
};
