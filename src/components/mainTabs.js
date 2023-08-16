import React, { useState } from "react";
import UserPage from "../pages/userPage";
import HistoryPage from "../pages/historyPage";
import StartPage from "../pages/startPage";
import { Routes, Route, Link, Router} from "react-router-dom";
import {
  Tab,
  Divider
} from "semantic-ui-react";
import Layout from "./layout";

const panes = [
  {
   menuItem: { as: Link, to: "/userPage", key: "users", icon: "user", content: "Сотрудник" }
 },

{
 menuItem: { as: Link, to: "/historyPage", key: "history", icon: "history", content: "История" }
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
      <Tab
        menu={{
          icon: "labeled",
          color: "blue",
          inverted: true
        }}
        panes={panes}

      />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/userPage" element={<UserPage />} />
        <Route path="/historyPage" element={<HistoryPage />} />
      </Routes>
    </>
  );
};

export default mainTabs;

// const panes = [
//   {
//     menuItem: { as: Link, to: "../pages/userPage", key: "users", icon: "user", content: "Сотрудник" },


//             render: () => (
   
//       <Tab.Pane secondary >
// {/* <UserPage /> */}
// <Routes>
//         <Route path="../pages/userPage" element={<UserPage />} />
//         <Route path="../pages/historyPage" element={<HistoryPage />} />


//       </Routes>
//       </Tab.Pane >
//     )

//   },

// {
//   menuItem: { as: Link, to: "../pages/historyPage", key: "history", icon: "history", content: "История" },
//   render: () =>

//     <Tab.Pane secondary>
//       <HistoryPage />
//     </Tab.Pane>
// },


// {
//   menuItem: {
//     key: "logout",
//       icon: "sign-out alternate",
//         content: "Выход",
//           position: "right"
//   }
// }
// ];

// const mainTabs = () => {

//   return (
//     <>
//       <Tab
//         menu={{
//           icon: "labeled",
//           color: "blue",
//           inverted: true
//         }}
//         panes={panes}

//       />
//       <Routes>
//         <Route path="../pages/userPage" element={<UserPage />} />
//         <Route path="../pages/historyPage" element={<HistoryPage />} />
//       </Routes>
//      </>
//   );
// };

// export default mainTabs;



