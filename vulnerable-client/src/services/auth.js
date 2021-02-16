import api from"./api";

export const isAuthenticated = () => document.cookie !== "";

export const logout = () => {
  api.get("/logout")
};

