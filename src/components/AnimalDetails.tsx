import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
}

export const AnimalDetails = ({ animal }: IAnimalProps) => {
  return (
    <>
      <h1>{animal.name}</h1>
      <p>{animal.lastFed}</p>
    </>
  );
};
