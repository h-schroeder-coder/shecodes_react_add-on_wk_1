import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="App-footer">
      This webpage was coded by{" "}
      <a
        href="https://github.com/h-schroeder-coder"
        target="_blank"
        rel="noreferrer"
      >
        Hannah Schroeder,
      </a>{" "}
      a{" "}
      <a
        href="https://www.shecodes.io/graduates/157590-hannah-schroeder"
        target="_blank"
        rel="noreferrer"
      >
        graduate
      </a>{" "}
      of{" "}
      <a
        href="https://www.shecodes.io/workshops"
        target="_blank"
        rel="noreferrer"
      >
        SheCodes,
      </a>{" "}
      as part of the{" "}
      <a
        href="https://www.shecodes.io/workshops"
        target="_blank"
        rel="noreferrer"
      >
        SheCodes React Add-on Workshop,
      </a>{" "}
      is open source on{" "}
      <a
        href="https://github.com/h-schroeder-coder/shecodes_react_add-on_wk_1"
        target="_blank"
        rel="noreferrer"
      >
        GitHub,
      </a>{" "}
      and is hosted by{" "}
      <a
        href="https://h-schroeder-coder-dictionary.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        Netifly
      </a>
    </footer>
  );
}