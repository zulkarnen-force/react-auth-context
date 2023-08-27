import React from "react";
import { useAuth } from "../contexts/AuthContext";
const Dashboard = () => {
  const { authUser, setAuthUser, isLogin, setisLogin } = useAuth();

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setisLogin(true);
    setAuthUser({ name: "Zulkarnen" });
  };

  const handleLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setisLogin(false);
    setAuthUser(null);
  };

  return (
    <>
      <span>User is currently: {isLogin ? "Logged-In" : "Logged-Out"}</span>
      {isLogin ? <span>User is currently: {authUser.name}</span> : null}
      <button
        onClick={(e) => {
          handleLogin(e);
        }}
      >
        Log in
      </button>
      <button
        onClick={(e) => {
          handleLogout(e);
        }}
      >
        Log Out
      </button>
    </>
  );
};

export default Dashboard;
