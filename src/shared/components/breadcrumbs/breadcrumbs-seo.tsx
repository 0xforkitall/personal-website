'use client';

import { routerUtils } from '@shared/utils';
import { BreadcrumbJsonLd } from 'next-seo';
import React from 'react';
import type { IBreadcrumbsSeoProps } from './breadcrumbs.api';

export const BreadcrumbsSeo: React.FC<IBreadcrumbsSeoProps> = ({ routes }) => {
    const breadcrumbElements = routes.map(({ label, url, urlParams }, index) => ({
        position: index + 1,
        name: label,
        item: routerUtils.generatePath(url, urlParams, { absoluteUrl: true }),
    }));

    return <BreadcrumbJsonLd useAppDir={true} itemListElements={breadcrumbElements} />;
};
