import React from 'react';

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconChartArcs } from '@tabler/icons';

// constantic
const icons = { IconChartArcs };

// ===========================|| WIDGET MENU ITEMS ||=========================== //

const compte = {
    id: 'widget',
    type: 'group',
    children: [
        {
            id: 'compte',
            title: <FormattedMessage id="Mon compte" />,
            type: 'item',
            url: '/compte',
            icon: icons.IconChartArcs
        }
    ]
};

export default compte;
