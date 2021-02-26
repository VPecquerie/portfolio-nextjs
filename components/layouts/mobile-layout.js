import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Media} from './layout-properties';

export default class MobileLayout extends Component {
    state = {};

    handleSidebarHide = () => this.setState({sidebarOpened: false});
    handleToggle = () => this.setState({sidebarOpened: true});

    render() {
        return (
            <Media at='mobile'>
                mobile
            </Media>
        );
    }
}

MobileLayout.propTypes = {
    children: PropTypes.node,
};
