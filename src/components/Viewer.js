import React from "react";
import "./Viewer.css";
import Details from "../containers/Details";

const Viewer = props => {
  return (
    <div className="container">
      
      <Details photoURL={props.photoURL} name={props.name} />
    </div>
  );
};

export default Viewer;
