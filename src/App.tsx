import React, { useState, useEffect } from "react";
import Dashboard from "./components/dashboard";
import Login from "./components/login";

export default function App() {
  const [mainUser, setmainUser] = useState<USER>({
    login: true,
    userToken: "",
  });
  document.title = "CC - Assignment";

  return (
    <div style={{ height: "100vh" }}>
      {mainUser.login ? (
        <Login setmainUser={setmainUser} />
      ) : (
        <Dashboard mainUser={mainUser} setmainUser={setmainUser} />
      )}
    </div>
  );
}

export interface USER {
  userToken: string;
  login: boolean;
}
