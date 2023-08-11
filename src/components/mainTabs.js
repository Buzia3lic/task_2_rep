import React, { useState } from "react";
import VacationTable from "./vacationTable";
import UserPage from "../pages/userPage";
import HistoryPage from "../pages/historyPage";
import { Routes, Route, Link } from "react-router-dom";
import {
  Tab,
  Divider
} from "semantic-ui-react";


const panes = [
  {
    menuItem: { key: "users", icon: "user", content: "Сотрудник" },
    render: () => (
      // <Tab.Pane secondary>
      //   <UserPage/>
      // </Tab.Pane>
      <Tab.Pane secondary>
        <Link to="../pages/userPage"><UserPage/></Link>
      </Tab.Pane>
    )
  },

  {
    menuItem: { key: "history", icon: "history", content: "История" },
    render: () =>
      // <Tab.Pane secondary>
      //   <HistoryPage />
      // </Tab.Pane>
      
      <Tab.Pane secondary>
      <Link to="../pages/historyPage"><HistoryPage /></Link>
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
    <>
      <Routes>
        <Route path="../pages/userPage" element={<UserPage />} />
        <Route path="../pages/historyPage" element={<HistoryPage />} />

      </Routes>

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
    </>
  );
};

export default mainTabs;



