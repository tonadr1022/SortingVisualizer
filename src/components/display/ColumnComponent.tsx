import { useContext } from "react";
import "../../app.css";
import { Column } from "../../interfaces/interfaces";
import { NumColumnsContext } from "../../App";
interface props {
  column: Column;
  maxHeight: number;
}

const ColumnComponent = ({ column, maxHeight }: props) => {
  const { numColumns } = useContext(NumColumnsContext);
  const height = (column.value / numColumns) * maxHeight;
  return (
    numColumns && (
      <div
        style={{
          width: "100%",

          margin: "1px",
          display: "flex",
          flexDirection: "column",
        }}>
        <div
          style={{
            height: height,
            width: "100%",
            //   transition: "0.25s",
            marginTop: "auto",
            backgroundColor: column.isFinalOrder
              ? "#a400f6"
              : column.isCurrentElement
              ? "#fff700"
              : column.isComparedToElement
              ? "#00c1fc"
              : "#00da2c",
          }}></div>
        <div
          style={{
            width: "100%",
            height: "8px",
            backgroundImage: column.isCurrentElement
              ? "linear-gradient(to bottom right, transparent 50%, rgb(255, 255, 255) 0), linear-gradient(to top right, rgb(255, 255, 255) 50%, transparent 0)"
              : undefined,
            backgroundSize: "calc(50% + 0.5px) 100%, calc(50% + 0.5px) 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left, right",
          }}></div>
      </div>
    )
  );
};

export default ColumnComponent;
