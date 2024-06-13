import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <ul className="navBarList">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/Animals")}>Animals</li>
      </ul>
    </>
  );
};
