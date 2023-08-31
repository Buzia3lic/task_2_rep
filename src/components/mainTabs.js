import React from "react";
import UserPage from "../pages/userPage";
import HistoryPage from "../pages/historyPage";
import StartPage from "../pages/startPage";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./mainMenu";

const mainTabs = () => {

  return (
    <>
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



