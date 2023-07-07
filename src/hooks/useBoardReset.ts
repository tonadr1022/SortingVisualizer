import { useContext } from "react";
import { Column, HandleBoardResetParams } from "../interfaces/interfaces";
import { InitialColumnsContext } from "../App";

const useBoardReset = ({ setBoard, sortOrderKey }: HandleBoardResetParams) => {
  const sortOrderColumns = useContext(InitialColumnsContext);
  const columns: Column[] = sortOrderColumns[sortOrderKey];
  const handleBoardReset = () => {
    setBoard((prevBoard) => ({
      ...prevBoard,
      columns: columns,
    }));
  };
  return handleBoardReset;
};

export default useBoardReset;
