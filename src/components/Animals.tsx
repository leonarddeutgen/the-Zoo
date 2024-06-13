import { useEffect, useState } from "react";
import { getAnimals } from "../services/animalService";
import { IAnimal } from "../models/IAnimal";
import { Animal } from "./Animal";

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
  return (
    <>
      <article className="animalsContainer">
        {data.map((animal) => (
          <Animal animal={animal} key={animal.id}></Animal>
        ))}
      </article>
    </>
  );
};
