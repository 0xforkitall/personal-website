import classNames from 'classnames';
import React from 'react';
import { Layout } from '../layout';
import { LinkNext } from '../link';
import { Text } from '../text';
import type { IBreadcrumbsProps } from './breadcrumbs.api';

export const Breadcrumbs: React.FC<IBreadcrumbsProps> = (props) => {
    const { routes, className } = props;

    return (
        <Layout className={classNames('breadcrumbs', className)} direction="row" gap="50" alignItems="center">
            {routes.map(({ url, label }, index) => (
                <>
                    <LinkNext
                        key={url}
                        href={url}
                        disabled={index === routes.length - 1}
                        variant="hover-underline"
                        truncate={index === routes.length - 1}
                    >
                        {label}
                    </LinkNext>
                    {index < routes.length - 1 && <Text size="m">{'>'}</Text>}
                </>
            ))}
        </Layout>
    );
};
