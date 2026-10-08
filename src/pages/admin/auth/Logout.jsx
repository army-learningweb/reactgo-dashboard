import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function Logout() {
  const navigate = useNavigate();
  const { logoutApi } = useAuthContext();

  useEffect(() => {
    const signOut = async () => {
      await logoutApi();
      navigate("/login", { replace: true });
    };

    signOut();
  }, [logoutApi, navigate]);

  return null;
}