import React, { useState } from "react";
import Calendar from "../components/calendar";
import UserPageProgress from "../components/userPageProgress";

import {
    Icon,
    Grid,
    Segment,
    Button,

} from "semantic-ui-react";
import UserCard from "../components/userCard";


const UserPage = () => (
    <Segment secondary>
        <Grid container celled='internally' >

            <Grid.Row columns={2}>
                <Grid.Column align="center">
                    <UserCard />
                </Grid.Column>
                <Grid.Column align="center">
                    <Grid.Row>
                        <Segment inverted color="yellow" tertiary>
                            <Calendar /><br />
                        </Segment>
                    </Grid.Row>
                    {/* <Button fluid animated color='blue'>
                    <Button.Content visible>Запросить</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button> */}
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <UserPageProgress />
                </Grid.Column>
            </Grid.Row>

        </Grid>
    </Segment>
)

export default UserPage