import React from "react";
/**
 * FEEDBACK: Doporucuju oddelit importy 3. strany s vlastnimi
 */
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
