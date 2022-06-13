import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { MoralisProvider } from "react-moralis";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const APP_ID = process.env.REACT_APP_MORALIS_APPLICATION_ID;
const SERVER_URL = process.env.REACT_APP_MORALIS_SERVER_URL;

root.render(
    <StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <App />
      </MoralisProvider>
      
    </StrictMode>
);
