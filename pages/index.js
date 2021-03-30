import {Segment} from "semantic-ui-react";
import React from "react";
import {ResponsiveContainer} from "../components/response-container";

export default function Home() {
    return (
        <div>
            <ResponsiveContainer>
                <Segment id="about" textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>

                </Segment>
                <Segment id="experiences" inverted textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>

                </Segment>
                <Segment id="trainings" textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>

                </Segment>
                <Segment id="projects" inverted textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>

                </Segment>
                <Segment id="skills" textAlign='center' style={{minHeight: 700, padding: '1em 0em'}} vertical>

                </Segment>
            </ResponsiveContainer>
        </div>
    )
}
