import { useNavigate } from "react-router";
import { useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function Login() {
  const navigate = useNavigate();

  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const { loginApi, isLoading, errors } = useAuthContext();

  // Đăng nhập
  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await loginApi({
      email: emailValue,
      password: passwordValue,
    });
    if(success) navigate("/admin/dashboard");
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <form
        action=""
        className="p-4 border border-gray-300 rounded-lg space-y-3 w-100"
        onSubmit={handleSubmit}
      >
        <h1 className="font-bold tracking-tight text-xl">Đăng nhập</h1>
        <input
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          type="text"
          name="email"
          placeholder="Tên đăng nhập"
          className="border border-gray-300 w-full py-1 px-3"
          autoComplete="username"
        />

        {errors?.errors?.email && (
          <p className="text-red-600 text-xs font-medium">
            {errors?.errors?.email}
          </p>
        )}

        <input
          value={passwordValue}
          onChange={(e) => setPasswordValue(e.target.value)}
          type="password"
          name="password"
          placeholder="Mật khẩu"
          className="border border-gray-300 w-full py-1 px-3"
          autoComplete="current-password"
        />

        {errors?.errors?.password && (
          <p className="text-red-600 text-xs font-medium">
            {errors?.errors?.password}
          </p>
        )}

        {errors?.message &&
          !errors?.errors?.password &&
          !errors?.errors?.email && (
            <p className="text-red-600 text-xs font-medium">{errors.message}</p>
          )}

        <button
          type="submit"
          className="text-xs font-semibold w-full bg-blue-600 text-white py-2 rounded-sm tracking-tight"
        >
          {!isLoading && "Đăng nhập"}
          {isLoading && "Đang xử lí..."}
        </button>
      </form>
    </div>
  );
}
