import "../../app.css";
import { Column } from "../../interfaces/interfaces";
interface props {
  column: Column;
}

const ColumnComponent = ({ column }: props) => {
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
          height: height * 0.5,
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

export default ColumnComponent;
