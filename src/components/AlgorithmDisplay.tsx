import { sortingAlgorithmParams } from "../interfaces/interfaces";
import { useGetSortOrders } from "./sortOrders";
import Board from "./ui/Board";

const AlgorithmDisplay = ({
  algorithm,
}: {
  name: string;
  sortFunction: ({ board, setBoard }: sortingAlgorithmParams) => Promise<void>;
}) => {
  const sortOrders = useGetSortOrders();
  return Object.values(sortOrders).map((sortOrder) => {
    <Board
      handleBoardReset={handleBoardReset}
      key={`${algorithm.name}:${sortOrder.key}`}
      algorithmName={algorithm.name}
      sortOrderName={sortOrder.name}
      sortOrderKey={sortOrder.key}
      handleBoardSolve={handleBoardSolve}
      sortFunction={algorithm.sortFunction}
      initialColumns={sortOrder.initialColumns}
    />;
  });
};

export default AlgorithmDisplay;
