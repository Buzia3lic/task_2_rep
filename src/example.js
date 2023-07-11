import "./style.css";
import React, { useState } from "react";
import Example from "./calendar";
import Logout from "./logout";
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
                // src="https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D1%87%D0%B5-%D0%BE%D0%B2%D0%B5%D0%BA%D0%B0-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D1%81%D0%B8-%D1%83%D1%8D%D1%82%D0%B0-71464248.jpg"
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
            <Example />
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
      </Tab.Pane>
    )
  },

  {
    menuItem: { key: "history", icon: "history", content: "История" },
    render: () => <Tab.Pane>Tab 2 Content</Tab.Pane>
  },

  // {
  //   menuItem: (
  //     <Menu.Item  key="logout" className="to-right" icon="sign-out alternate">

  //     </Menu.Item>
  //   )
  // },

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

// export default function Example() {
//   const [value, setValue] = useState(new Date());

//   return (
//     <Calendar
//       multiple
//       plugins={[<DatePanel />]}
//       value={value}
//       onChange={setValue}
//     />
//   );
// }
