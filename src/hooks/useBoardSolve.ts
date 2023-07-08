import { Column, HandleBoardSolveParams } from "../interfaces/interfaces";
import { useGetSortOrders } from "../components/sortOrders";
import { useContext } from "react";
import { NumColumnsContext, SpeedMultiplierContext } from "../App";

const useBoardSolve = ({
  setBoard,
  sortFunction,
  sortOrderKey,
}: HandleBoardSolveParams) => {
  const sortOrders = useGetSortOrders();
  const { random, reversed, nearlySorted, fewUnique } = sortOrders;
  const { numColumns } = useContext(NumColumnsContext);
  const { speedMultiplier } = useContext(SpeedMultiplierContext);

  const sortOrderColumns: { [key: string]: Column[] } = {
    random: random.initialColumns,
    reversed: reversed.initialColumns,
    nearlySorted: nearlySorted.initialColumns,
    fewUnique: fewUnique.initialColumns,
  };
  const columns: Column[] = sortOrderColumns[sortOrderKey];

  const handleBoardSolve = () => {
    setBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: columns.slice(0),
      };
      sortFunction({
        board: updatedBoard,
        setBoard,
        numColumns,
        speedMultiplier,
      });
      return updatedBoard;
    });
  };
  return handleBoardSolve;
};

export default useBoardSolve;
