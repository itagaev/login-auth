import { postAsync } from "../functions";

export const login = async (login: string, password: string): Promise<{}> =>
  postAsync("login", JSON.stringify({ login, password }));

export const register = async (login: string, password: string, email: string): Promise<{}> =>
  postAsync("register", JSON.stringify({ login, password, email }));
