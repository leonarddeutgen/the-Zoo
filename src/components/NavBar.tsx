import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="navBarList">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/Animal")}>Animals</li>
      </ul>
    </>
  );
};
