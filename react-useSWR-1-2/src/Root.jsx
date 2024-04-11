import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import GithubUser from "./components/GithubUser";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

function Root() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="users" element={<GithubUser />} />
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Root;
