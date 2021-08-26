import { postAsync } from "../functions";

export const login = async (login: string, password: string): Promise<{ status: number }> =>
  postAsync("login", JSON.stringify({ login, password }));

export const register = async (login: string, password: string, email: string): Promise<{ status: number }> =>
  postAsync("register", JSON.stringify({ login, password, email }));
