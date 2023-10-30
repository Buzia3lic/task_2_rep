import React from "react";
import UserPage from "../pages/userPage";
import HistoryPage from "../pages/historyPage";
import HelloPage from "../pages/helloPage";
import HubPage from "../pages/hubPage";
import { Routes, Route } from "react-router-dom";
import MainMenu from "./mainMenu";

const mainTabs = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainMenu />}>
          <Route index element={<HelloPage />} />
          <Route path="userPage" element={<UserPage />} />
          <Route path="historyPage" element={<HistoryPage />} />
          <Route path="hubPage" element={<HubPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default mainTabs;



