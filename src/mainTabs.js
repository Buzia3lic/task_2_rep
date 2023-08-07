import React, { useState } from "react";
import Calendar from "./calendar";
import VacationTable from "./vacationTable";
import UserPage from "./userPage";
import UserPageSegments from "./userPageSegments";

import {
  Tab,
  Divider
} from "semantic-ui-react";

const panes = [
  {
    menuItem: { key: "users", icon: "user", content: "Сотрудник" },
    render: () => (
      <Tab.Pane secondary>
        <UserPage/><br/>
        <UserPageSegments/>
      </Tab.Pane>
    )
  },

  {
    menuItem: { key: "history", icon: "history", content: "История" },
    render: () => 
    <Tab.Pane secondary>
       <UserPageSegments/>
       <Divider />
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
