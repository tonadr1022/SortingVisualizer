import "../../app.css";
import { column } from "../../interfaces/interfaces";
interface props {
  column: column;
}

const Column = ({ column }: props) => {
  const height = column.value * 10;
  return (
    <div
      style={{
        margin: 2,
        height: height,
        backgroundColor: column.isMin ? "#a400f6" : "#00da2c",
      }}
      className="board-column"></div>
  );
};

export default Column;
