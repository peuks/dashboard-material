import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics, IconTable, IconFileText, IconMap, IconBoxMultiple } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconDeviceAnalytics, IconTable, IconFileText, IconMap, IconBoxMultiple };

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboard = {
    id: 'dashboard',
    title: <FormattedMessage id=" " />,
    type: 'group',
    children: [
        {
            id: 'dossier',
            title: <FormattedMessage id="Mon dossier" />,
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconTable,
            breadcrumbs: false
        },
        {
            id: 'location',
            title: <FormattedMessage id="Ma location" />,
            type: 'item',
            url: '/dashboard/location',
            icon: icons.IconFileText,
            breadcrumbs: false
        },
        {
            id: 'candidatures',
            title: <FormattedMessage id="Mes candidatures" />,
            type: 'item',
            url: '/dashboard/candidatures',
            icon: icons.IconMap,
            breadcrumbs: false
        },
        {
            id: 'favories',
            title: <FormattedMessage id="Mes favories" />,
            type: 'item',
            url: '/dashboard/favories',
            icon: icons.IconBoxMultiple,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
