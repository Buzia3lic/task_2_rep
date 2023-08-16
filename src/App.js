import './App.css';
import MainTabs from "./components/mainTabs";
import React from "react";
import ReactDOM from 'react-dom/client';
import { Container, Header, List } from "semantic-ui-react";

function App() {
  return (
    <Container style={{ margin: 20 }}>
      
        <MainTabs />
    </Container>
  );


}

export default App;