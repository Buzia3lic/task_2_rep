import { Link, Outlet } from "react-router-dom"
import React from "react";
import { Tab } from "semantic-ui-react";


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

const MainMenu = () => {
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
        <Outlet />
    </>
    )
};

export default MainMenu;