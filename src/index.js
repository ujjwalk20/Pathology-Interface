import { StrictMode } from "react";
import ReactDOM from "react-dom";
import styles from "/public/styles.css";

import App from "/src/components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
