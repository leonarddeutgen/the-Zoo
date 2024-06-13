import { useNavigate } from "react-router-dom";
import { IAnimal } from "../models/IAnimal";

interface IAnimalProps {
  animal: IAnimal;
}

export const Animal = ({ animal }: IAnimalProps) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="animalbox"
        onClick={() => navigate(`/animal/${animal.id}`)}
      >
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
