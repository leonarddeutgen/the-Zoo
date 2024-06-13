import { IAnimal } from "../models/IAnimal";
import { getApi } from "./serviceBase";

export const getAnimals = async (): Promise<IAnimal[]> => {
  const url = "https://animals.azurewebsites.net/api/animals";
  const data = await getApi<IAnimal[]>(url);
  localStorage.setItem("animalList", JSON.stringify(data));
  return data;
};
