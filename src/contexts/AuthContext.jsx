import { login, logout } from "../services/authServices";
import { useState, createContext, useContext, useCallback } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState(null);
  const [authToken, setAuthToken] = useState(localStorage.getItem("auth_token"));
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  // Đăng nhập
  const loginApi = async ({ email, password }) => {
    try {
      setIsLoading(true);
      setErrors(null);
      const user = await login({ email, password });
      if (!user?.token) {
        throw new Error("Phản hồi đăng nhập không có token.");
      }
      localStorage.setItem("auth_token", user.token)
      setUserLogin(user);
      setAuthToken(user.token);
      return true;
    } catch (error) {
      setErrors(error.response?.data ?? { message: error.message });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Đăng xuất
  const logoutApi = useCallback(async () => {
    try {
      await logout();
      setErrors(null);
      return true;
    } catch (error) {
      setErrors(error.response?.data ?? { message: error.message });
      return false;
    } finally {
      localStorage.removeItem("auth_token")
      setAuthToken(null);
      setUserLogin(null);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loginApi,
        logoutApi,
        userLogin,
        isAuthenticated: Boolean(authToken),
        isLoading,
        errors,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Lỗi !");
  }

  return context;
};
