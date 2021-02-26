import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Media} from './layout-properties';
import {Button, Icon, Segment, Visibility} from "semantic-ui-react";
import {Navbar} from "./blocks/navbar";

export default class DesktopLayout extends Component {

    state = {};

    hideFixedMenu = () => this.setState({fixed: false});
    showFixedMenu = () => this.setState({fixed: true});

    render() {

        const {children} = this.props;
        const {fixed} = this.state;

        return (
            <Media greaterThan='mobile'>
                <Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
                    <Segment inverted textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>
                        <Navbar fixed={fixed} />

                        <h1>
                            Vincent PECQUERIE
                        </h1>
                        <h2>
                            Développeur Web, Mobile et aspirant DevOps
                        </h2>

                        <Button>
                            <Icon name="angle double down" />
                        </Button>

                    </Segment>
                </Visibility>
                <Segment textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>

                </Segment>
                <Segment  inverted textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>

                </Segment>
                <Segment textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>

                </Segment>
                <Segment  inverted textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>

                </Segment>

            </Media>
        );
    }
}

DesktopLayout.propTypes = {
    children: PropTypes.node,
};