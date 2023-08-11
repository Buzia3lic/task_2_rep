import React, { useState } from "react";
import VacationTable from "./vacationTable";
import UserPage from "../pages/userPage";
import HistoryPage from "../pages/historyPage";
import { Routes, Route, Link, Router} from "react-router-dom";
import {
  Tab,
  Divider
} from "semantic-ui-react";


const panes = [
  {
    menuItem: { as: Link, to: "../pages/userPage", key: "users", icon: "user", content: "Сотрудник" },

 pane: (
          <Route
            path="/"
            exact
            render={() => (
              <Tab.Pane>
                <div>Home</div>
              </Tab.Pane>
            )}
          />
        )

    //         render: () => (
   
//       <Tab.Pane secondary >
// {/* <UserPage /> */}

//       </Tab.Pane >
//     )
  },

{
  menuItem: { as: Link, to: "../pages/historyPage", key: "history", icon: "history", content: "История" },
  render: () =>

    <Tab.Pane secondary>
      <HistoryPage />
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

      />
     </>
  );
};

export default mainTabs;



