import React, { useState } from "react";
import VacationTable from "./vacationTable";
import UserPageProgress from "./userPageProgress";
import UserPage from "./userPage";


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
        <UserPageProgress/>
      </Tab.Pane>
    )
  },

  {
    menuItem: { key: "history", icon: "history", content: "История" },
    render: () => 
    <Tab.Pane secondary>
       <UserPageProgress/>
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

const mainTabs = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Tab
      menu={{
        icon: "labeled",
        color: "blue",
        inverted: true
      }}
      panes={panes}
      // activeIndex={activeIndex}
      // onTabChange={(e, data) => {
      //   if (data.activeIndex === 2) {
      //     alert(`You've clicked on the "Logout" tab!`);
      //     return;
      //   }
      //   setActiveIndex(data.activeIndex);
      // }}
    />
  );
};

export default mainTabs;



