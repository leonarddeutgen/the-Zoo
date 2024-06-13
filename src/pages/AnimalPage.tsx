import { useParams } from "react-router-dom";
import { AnimalDetails } from "../components/AnimalDetails";
import { IAnimal } from "../models/IAnimal";
import { useEffect, useState } from "react";
import axios from "axios";

export const AnimalPage = () => {
  const { animalId } = useParams();
  const [animal, setAnimal] = useState<IAnimal>();

  //   const animals: IAnimal[] = JSON.parse(
  //     localStorage.getItem("animalList") || "[]"
  //   );

  useEffect(() => {
    const getAnimal = async () => {
      const response = await axios.get(
        `https://animals.azurewebsites.net/api/animals/${animalId}`
      );
      setAnimal(response.data);
    };
    getAnimal();
  });

  return <>{animal && <AnimalDetails animal={animal}></AnimalDetails>}</>;
};
