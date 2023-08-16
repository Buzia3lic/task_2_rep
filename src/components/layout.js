import { Link, Outlet } from "react-router-dom"

import React, { useState } from "react";
import VacationTable from "./vacationTable";
import UserPage from "../pages/userPage";
import HistoryPage from "../pages/historyPage";
import {
  Tab,
  Divider
} from "semantic-ui-react";


const panes = [
    {
        menuItem: { as: Link, to: "../pages/userPage", key: "users", icon: "user", content: "Сотрудник" },


        render: () => (

            <Tab.Pane secondary >

            </Tab.Pane >
        )

    },

    {
        menuItem: { as: Link, to: "../pages/historyPage", key: "history", icon: "history", content: "История" },
        render: () =>

            <Tab.Pane secondary>

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



const Layout = () => {
    <>
        <div>
            return (
            <Tab
                menu={{
                    icon: "labeled",
                    color: "blue",
                    inverted: true
                }}
                panes={panes}
            />
            );
        </div>
        <Outlet />
    </>

};

export default Layout;