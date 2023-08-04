import "./style.css";
import React, { useState } from "react";
import Calendar from "./calendar";
import VacationTable from "./vacationTable";
import UserPage from "./userPage";

import {
  Menu,
  Label,
  Tab,
  Button,
  Icon,
  Card,
  Image,
  Grid,
  Segment,
  Container
} from "semantic-ui-react";

const panes = [
  {
    menuItem: { key: "users", icon: "user", content: "Сотрудник" },
    render: () => (
      <Tab.Pane>
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
            <Calendar/>
          </Grid.Column>
        </Grid>

        <Segment.Group horizontal>
          <Segment textAlign="center" inverted color="green">
            6
          </Segment>

          <Segment textAlign="center" inverted color="red">
            2
          </Segment>
        </Segment.Group>

        <UserPage/>
      </Tab.Pane>
    )
  },

  {
    menuItem: { key: "history", icon: "history", content: "История" },
    render: () => 
    <Tab.Pane>
      <VacationTable/>
    </Tab.Pane>
  },


  {
    menuItem: {
      key: "logout",
      icon: "sign-out alternate",
      content: "Выход",
      position: "right"
    }
  }
];

const vacationData = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Tab
      menu={{
        icon: "labeled",
        color: "blue",
        inverted: true
      }}
      panes={panes}
      activeIndex={activeIndex}
      onTabChange={(e, data) => {
        if (data.activeIndex === 2) {
          alert(`You've clicked on the "Logout" tab!`);
          return;
        }
        setActiveIndex(data.activeIndex);
      }}
    />
  );
};

export default vacationData;
