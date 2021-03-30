import React from "react";
import {MediaContextProvider} from './layouts/layout-properties';
import DesktopLayout from './layouts/desktop-layout';
import MobileLayout from './layouts/mobile-layout';
import PropTypes from 'prop-types';

export const ResponsiveContainer = ({children}) => (
    /* Heads up!
     * For large applications it may not be best option to put all page into these containers at
     * they will be rendered twice for SSR.
     */
    <MediaContextProvider>
        <DesktopLayout>{children}</DesktopLayout>
        <MobileLayout>{children}</MobileLayout>
    </MediaContextProvider>
);

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
};

