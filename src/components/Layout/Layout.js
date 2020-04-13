import React from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import plants from "../../data/plants.json";
import Logo from "../Logo/Logo";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  var name = "";
  if (pathname === "/") {
    name = "asd";
  } else {
    const plant = plants.find((plant) => plant.id === parseInt(id));
    const { commonName } = plant;
    name = commonName;
  }

  return (
    <div className="App">
      <Logo />
      <div className="container">
        {pathname === "/" ? <h1>Plants</h1> : <h1>{name}</h1>}
        {children}
      </div>
    </div>
  );
};

export default Layout;
