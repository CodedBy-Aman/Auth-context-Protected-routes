import React, { Children, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : navigate("/login" );
};

export default ProtectedRoute;
