import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.css";
import { BrowserRouter } from "react-router-dom";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiProvider api={apiSlice}>
        <App />
      </ApiProvider>
    </BrowserRouter>
  </React.StrictMode>
);
