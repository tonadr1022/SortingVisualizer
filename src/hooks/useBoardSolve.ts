import { useContext } from "react";
import { useGetSortOrders } from "../components/sortOrders";
import { Column, HandleBoardSolveParams } from "../interfaces/interfaces";
import { InitialColumnsContext } from "../App";

const useBoardSolve = ({
  setBoard,
  sortFunction,
  sortOrderKey,
}: HandleBoardSolveParams) => {
  const sortOrderColumns = useContext(InitialColumnsContext);
  const columns: Column[] = sortOrderColumns[sortOrderKey];

  const handleBoardSolve = () => {
    setBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: JSON.parse(JSON.stringify(columns)),
      };
      sortFunction({
        board: updatedBoard,
        setBoard,
      });
      return updatedBoard;
    });
  };
  return handleBoardSolve;
};

export default useBoardSolve;
