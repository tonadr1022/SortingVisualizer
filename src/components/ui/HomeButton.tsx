import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NumColumnsContext, SpeedMultiplierContext } from "../../App";

const HomeButton = () => {
  const navigate = useNavigate();
  const { setNumColumns } = useContext(NumColumnsContext);
  const { setSpeedMultiplier } = useContext(SpeedMultiplierContext);

  const handleHomeClick = () => {
    setNumColumns(20);
    setSpeedMultiplier(1);
    navigate("/");
  };
  return (
    <button style={{ margin: 2 }} onClick={handleHomeClick}>
      Home
    </button>
  );
};

export default HomeButton;
