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
                    <Menu.Item href="#about">A propos</Menu.Item>
                    <Menu.Item href="#experiences">Experience</Menu.Item>
                    <Menu.Item href="#trainings">Formation</Menu.Item>
                    <Menu.Item href="#projects">Projets</Menu.Item>
                    <Menu.Item href="#skills">Compétences</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item href="#contact">Contact</Menu.Item>
                        <Menu.Item href="https://blog.vincent-p.fr">Blog</Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        )
    }
}

Navbar.propTypes = {
    fixed: PropTypes.bool
};