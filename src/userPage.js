import React, { useState } from "react";
import Calendar from "./calendar";

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


const UserPage = () => (

    <Grid container celled='internally' columns={2}>
        <Grid.Column Align="center">
            <Card>
                <Image
                    src="https://www.webmoney.ru/img/wmkeeper_256x256.png"
                    wrapped
                    ui={false}
                />
                <Card.Content >
                    <Card.Header textAlign="center">Майк Вазовски</Card.Header>
                    <Card.Meta textAlign="center">
                        <span className="date">Работает с 2015</span>
                    </Card.Meta>
                    <Card.Description textAlign="center">
                        Необязательное описание
                    </Card.Description>
                </Card.Content>
            </Card>
        </Grid.Column>
        <Grid.Column Align="center">
            <Grid.Row><Calendar /><br /></Grid.Row>

            <Grid.Row>

                
                    <Button fluid animated color='blue'>
                        <Button.Content visible>Запросить</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                
            </Grid.Row>



        </Grid.Column>

       
    </Grid>
)

export default UserPage