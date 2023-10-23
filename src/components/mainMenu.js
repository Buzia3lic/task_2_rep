import { Link, Outlet } from "react-router-dom"
import React from "react";
import { Tab, Image, Divider, Segment} from "semantic-ui-react";


const panes = [
  {
    menuItem:  { as: Link, to: "https://www.webmoney.ru/", content: 
    <Image
    verticalAlign='bottom'
    alt='Webmoney'
    src='https://www.webmoney.ru/assets/images/wm-logo-white.svg?v2'
  /> 
}


  },
    {
     menuItem: { as: Link, to: "/userPage", key: "users", icon: "user", content: "Сотрудник" }
   },
  
  {
   menuItem: { as: Link, to: "/historyPage", key: "history", icon: "history", content: "История" }
  },

  {
    menuItem: { as: Link, to: "/hubPage", key: "hub", icon: "hdd", content: "Support-Hub" }
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
        {/* <Divider /> */}
        <Segment padded='very' inverted color="teal"><Image src='https://www.webmoney.ru/assets/images/wm-logo-white.svg?v2' size='medium' centered /></Segment>
        
    </>
    )
};

export default MainMenu;