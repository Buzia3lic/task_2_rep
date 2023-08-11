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


const UserCard = () => (

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
)

export default UserCard