import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirect from "./LoadingToRedirect";
import Home from "../pages/Home";

const UserRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? <Home /> : <LoadingToRedirect />;
};

export default UserRoute;
