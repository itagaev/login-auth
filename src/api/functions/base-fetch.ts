export const baseFetchAsync = async (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  body?: string
): Promise<any> => {
  try {
    const response = await fetch(`http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/${url}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
      method,
      body,
    });

    return response.json();
  } catch (e) {
    return console.error(e);
  }
};
