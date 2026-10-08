import { Navigate, Outlet } from "react-router";
import { useAuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuthContext();
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
