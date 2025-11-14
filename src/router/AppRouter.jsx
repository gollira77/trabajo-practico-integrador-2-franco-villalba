import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;