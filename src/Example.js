import React from "react";
import "./Example.css";

export default function Example(props) {
  console.log(props.example);
  if (props.example) {
    return (
      <div className="Example">
        <h5>Example: </h5>
        <span className="resulting">{props.example}</span>
      </div>
    );
  } else {
    return null;
  }
}
