import "../../app.css";
import { column } from "../../interfaces/interfaces";
interface props {
  column: column;
}

const Column = ({ column }: props) => {
  const height = column.value * 5;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          height: 0,
          width: 0,
          marginLeft: "2px",
          borderLeft: "4px solid transparent",
          borderRight: "4px solid transparent",
          borderTop: column.isCurrentElement
            ? "8px solid #ffffff"
            : "8px solid transparent",
        }}></div>
      <div
        style={{
          marginLeft: 2,
          marginRight: 2,
          marginBottom: 0,
          height: height,
          backgroundColor: column.isFinalOrder
            ? "#a400f6"
            : column.isCurrentElement
            ? "#fff700"
            : column.isComparedToElement
            ? "#00c1fc"
            : "#00da2c",
        }}
        className="board-column"></div>
    </div>
  );
};

export default Column;
