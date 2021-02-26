import PropTypes from "prop-types";
import {Button, Container, Menu, Segment} from "semantic-ui-react";
import React, {Component} from "react";

export class Navbar extends Component {

    render() {
        return (
            <Menu fixed={this.props.fixed ? 'top' : null} inverted={!this.props.fixed} pointing={!this.props.fixed}
                  secondary={!this.props.fixed}
                  size='large'>
                <Container>
                    <Menu.Item as='a' active>
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'>A propos</Menu.Item>
                    <Menu.Item as='a'>Experience</Menu.Item>
                    <Menu.Item as='a'>Formation</Menu.Item>
                    <Menu.Item as='a'>Projets</Menu.Item>
                    <Menu.Item as='a'>Compétences</Menu.Item>
                    <Menu.Item as='a'>Recommandations</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as='a'>Contact</Menu.Item>
                        <Menu.Item as='a'>Blog</Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

Navbar.propTypes = {
    fixed: false
};