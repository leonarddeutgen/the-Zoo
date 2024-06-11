import axios from "axios";

export const getApi = async <T>(url: string): Promise<T> => {
  const response = await axios.get<T>(url);
  return response.data;
};
