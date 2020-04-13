import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@material-ui/core";
import MainPage from "../src/pages/MainPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <MainPage />
      </Layout>
    </div>
  );
}

export default App;
