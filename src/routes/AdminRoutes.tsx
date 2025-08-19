import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const AdminRoute = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  // Check if the user is logged in and is an admin
  if (!user || user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default AdminRoute;
