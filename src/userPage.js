import "./style.css";
import React, { useState } from "react";
import Calendar from "./calendar";

import {
    Icon,
    Card,
    Image,
    Grid,
    Segment,
} from "semantic-ui-react";


const UserPage = () => (

    <Grid columns={2}>
        <Grid.Column Align="center">
            <Card>
                <Image
                    src="https://www.webmoney.ru/img/wmkeeper_256x256.png"
                    wrapped
                    ui={false}
                />
                <Card.Content>
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
            <Calendar />
        </Grid.Column>
        
        
    </Grid>

    
)


const Segments = () => (

<Segment.Group horizontal>
        <Segment textAlign="center" inverted color="green">
            6
        </Segment>

        <Segment textAlign="center" inverted color="red">
            2
        </Segment>
    </Segment.Group>
)


export { 
    Segments,
    UserPage
}