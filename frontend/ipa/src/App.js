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
    <div>
      <h1>My app</h1>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/app-admin">App Admin</Link>
        </li>
        <li>
          <Link to="/leadership">Leadership</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/appadmin" element={<AppAdmin />} />
        <Route path="/newmember/:id" element={<NewMember />} />
        <Route path="/taskadmin/:id" element={<TaskAdmin />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </div>
  );
}

export default App;
