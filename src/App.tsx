import React, { useState } from "react";
import Dashboard from "./components/dashboard";
import Login from "./components/login";

export default function App() {
  const [mainUser, setmainUser] = useState({ user: {}, login: true });
  document.title = "CC - Assignment";
  return (
    <div style={{ height: "100vh" }}>
      {mainUser.login ? (
        <Login setmainUser={setmainUser} />
      ) : (
        <Dashboard setmainUser={setmainUser} />
      )}
    </div>
  );
}
