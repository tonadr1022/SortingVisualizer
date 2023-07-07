import { Column, HandleBoardSolveParams } from "../interfaces/interfaces";
import { useGetSortOrders } from "../components/sortOrders";

const useBoardSolve = ({
  setBoard,
  sortFunction,
  sortOrderKey,
}: HandleBoardSolveParams) => {
  const sortOrders = useGetSortOrders();
  const { random, reversed, nearlySorted, fewUnique } = sortOrders;

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
