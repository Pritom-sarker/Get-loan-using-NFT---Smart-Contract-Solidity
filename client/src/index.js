import React from "react";
import ReactDOM from "react-dom/client";
import { MoralisProvider } from "react-moralis";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <MoralisProvider appId="vmCIliZiQAta16NabqmGTQ3qaXYwQdDV5v0LgDYJ" serverUrl="https://kjqxylu0eijy.usemoralis.com:2053/server">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MoralisProvider>,
);