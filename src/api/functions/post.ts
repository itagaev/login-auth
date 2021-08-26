import { baseFetchAsync } from "./base-fetch";

export const postAsync = async (url: string, body: string): Promise<any> => baseFetchAsync(url, "POST", body);
