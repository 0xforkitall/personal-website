'use client';

import classNames from 'classnames';
import React from 'react';
import { iconList } from './icon-list';
import type { IIconProps } from './icon.api';

export const Icon: React.FC<IIconProps> = (props) => {
    const { icon, color, className } = props;
    const Icon = iconList[icon];

    return <Icon className={classNames('icon', { [`icon--color-${color}`]: color != null }, className)} />;
};
