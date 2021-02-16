import api from"./api";
export const TOKEN_KEY = "TOKEN_KEY";

export const isAuthenticated = () => document.cookie !== "";

export const logout = () => {
  api.post("/logout")
};

