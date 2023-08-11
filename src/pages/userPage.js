import React, { useState } from "react";
import Calendar from "../components/calendar";
import UserPageProgress from "../components/userPageProgress";

import {
    Icon,
    Card,
    Image,
    Grid,
    Segment,
    Button,
    Container,
    Progress
} from "semantic-ui-react";
import UserCard from "../components/userCard";


const UserPage = () => (

    <Grid container celled='internally' >

        <Grid.Row columns={2}>
            <Grid.Column Align="center">
                <UserCard />
            </Grid.Column>
            <Grid.Column Align="center">
                <Grid.Row>
                    <Calendar /><br />
                </Grid.Row>
                <Button fluid animated color='blue'>
                    <Button.Content visible>Запросить</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                <UserPageProgress />
            </Grid.Column>
        </Grid.Row>


    </Grid>
)

export default UserPage