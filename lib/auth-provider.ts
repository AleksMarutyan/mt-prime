import { AuthProvider } from "react-admin";

export const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    if (username === "admin" && password === "admin") {
      localStorage.setItem("admin-auth", "true");
      return Promise.resolve();
    }
    return Promise.reject();
  },

  logout: () => {
    localStorage.removeItem("admin-auth");
    return Promise.resolve();
  },

  checkError: ({ status }: { status: number }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem("admin-auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },

  checkAuth: () => {
    return localStorage.getItem("admin-auth")
      ? Promise.resolve()
      : Promise.reject();
  },

  getPermissions: () => Promise.resolve(),
};
