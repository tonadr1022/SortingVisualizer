import "../../app.css";
import { column } from "../../interfaces/interfaces";
interface props {
  column: column;
}

const Column = ({ column }: props) => {
  const height = column.value * 10;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: "10px",
          width: "8px",
          margin: 2,
          backgroundColor: column.isColorTwo ? "#ffffff" : "inherit",
        }}></div>
      <div
        style={{
          marginLeft: 2,
          marginRight: 2,
          marginBottom: 0,
          height: height,
          backgroundColor: column.isColorOne ? "#a400f6" : "#00da2c",
        }}
        className="board-column"></div>
    </div>
  );
};

export default Column;
