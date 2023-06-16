import { lazy, type FC, type LazyExoticComponent, type SVGProps } from 'react';
import { IconType } from './icon-type';

type LazyIcon = LazyExoticComponent<FC<SVGProps<SVGSVGElement>>>;

export const iconList: Record<IconType, LazyIcon> = {
    [IconType.ATOM]: lazy(() => import('../../assets/icons/atom.svg')),
    [IconType.CPU]: lazy(() => import('../../assets/icons/cpu.svg')),
    [IconType.CUBE]: lazy(() => import('../../assets/icons/cube.svg')),
};
