import './App.css';
import MainTabs from "./components/mainTabs";
import React from "react";
import ReactDOM from 'react-dom/client';
import { Container } from "semantic-ui-react";
import StartPage from './pages/startPage';


function App() {
  return (
    <Container style={{ margin: 20 }}>
        <MainTabs />
        {/* <StartPage /> */}
    </Container>
  );


}

export default App;