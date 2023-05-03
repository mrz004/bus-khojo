import React from "react";
import "./App.css";
import MyMap from "./components/MyMap";
import About from "./components/About";
import config from "./config";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainComponent from "./components/MainComponent";

function App() {
  document.title = config.projectName;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainComponent config={config} />}>
        <Route path="" element={<MyMap apiUrl={config.apiUrl} />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
