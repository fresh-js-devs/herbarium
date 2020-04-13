import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Routes from "./routes";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default App;
