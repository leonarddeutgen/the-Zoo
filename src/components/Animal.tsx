import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
}

export const Animal = ({ animal }: IAnimalProps) => {
  return (
    <>
      <div className="animalbox">
        <h3>{animal.name}</h3>
        <div className="imgContainer">
          <img className="imgContainer--img" src={animal.imageUrl} alt="" />
        </div>
        <div className="animalbox--info">
          <p>{animal.shortDescription}</p>
        </div>
      </div>
    </>
  );
};
