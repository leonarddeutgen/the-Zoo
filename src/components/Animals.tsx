import { useEffect, useState } from "react";
import { getAnimals } from "../services/animalService";
import { IAnimal } from "../models/IAnimal";

export const Animals = () => {
  const [data, setData] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (data.length > 0) return;
    const getAllAnimals = async () => {
      const animalsdata = await getAnimals();
      setData(animalsdata);
    };
    getAllAnimals();
  });
  console.log(data);
  return (
    <>
      <article className="animalsContainer"></article>
    </>
  );
};
