import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ChampionsLeague from "./components/ChampionsLeaguePage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <div>404 Error</div> },
  {
    path: "/championsleague",
    element: <ChampionsLeague />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
