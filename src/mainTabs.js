import "./style.css";
import React, { useState } from "react";
import Calendar from "./calendar";
import VacationTable from "./vacationTable";
import UserPage from "./userPage";
import UserPageSegments from "./userPageSegments";

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
        <UserPage/>
        <UserPageSegments/>
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
