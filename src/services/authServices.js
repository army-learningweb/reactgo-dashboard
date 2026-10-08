import { privateApi } from "../api/privateApi";

export async function login({ email, password }) {
  const response = await privateApi.post("/login", { email, password });
  return response.data;
}

export async function logout() {
  const response = await privateApi.post("/logout");
  return response.data;
}

export async function register({name, email, password}) {
  const response = await privateApi.post("/register", {name, email, password});
  return response.data;
}

export async function user() {
    const response = await privateApi.get("/user");
    return response.data
}
