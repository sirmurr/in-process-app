import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import NewMember from "./NewMember";
import AppAdmin from "./AppAdmin";
import Leadership from "./Leadership";
import TaskAdmin from "./TaskAdmin";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Login />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app-admin" element={<AppAdmin />} />
        <Route path="/new-member/:id" element={<NewMember />} />
        <Route path="/task-admin/:id" element={<TaskAdmin />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </div>
  );
}

export default App;
