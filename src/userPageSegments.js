import "./style.css";
import React, { useState } from "react";

import {
    Segment
} from "semantic-ui-react";


const UserPageSegments = () => (

<Segment.Group horizontal>
        <Segment textAlign="center" inverted color="green">
            6
        </Segment>

        <Segment textAlign="center" inverted color="red">
            2
        </Segment>
    </Segment.Group>
)


export default UserPageSegments