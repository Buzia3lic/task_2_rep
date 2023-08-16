import React from "react";
import UserPage from "../pages/userPage";
import HistoryPage from "../pages/historyPage";
import StartPage from "../pages/startPage";
import { Routes, Route, Link } from "react-router-dom";
import {
  Tab
} from "semantic-ui-react";
import MainMenu from "./mainMenu";

// const panes = [
//   {
//     menuItem: { as: Link, to: "/userPage", key: "users", icon: "user", content: "Сотрудник" }
//   },

//   {
//     menuItem: { as: Link, to: "/historyPage", key: "history", icon: "history", content: "История" }
//   },

//   {
//     menuItem: {
//       key: "logout",
//       icon: "sign-out alternate",
//       content: "Выход",
//       position: "right"
//     }
//   }
// ];

const mainTabs = () => {

  return (
    <>
      {/* <Tab
        menu={{
          icon: "labeled",
          color: "blue",
          inverted: true
        }}
        panes={panes}

      /> */}
      <Routes>
        <Route path="/" element={<MainMenu />}>
          <Route index element={<StartPage />} />
          <Route path="userPage" element={<UserPage />} />
          <Route path="historyPage" element={<HistoryPage />} />
        </Route>
      </Routes>

    </>
  );
};

export default mainTabs;



