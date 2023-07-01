import { useContext } from "react";
import selectionSort from "../sortingAlgorithms.ts/selectionSort";
import { onOneBoardSolveClickParams } from "../interfaces/interfaces";
import insertionSort from "../sortingAlgorithms.ts/insertionSort";
import bubbleSort from "../sortingAlgorithms.ts/bubbleSort";
import heapSort from "../sortingAlgorithms.ts/heapSort";
import {
  getInitialBoard,
  getNearlySortedColumns,
  getRandomColumns,
  getReverseColumns,
} from "../utils/getInitialBoard";
import Board2 from "./ui/Board";
import { NumColumnsContext } from "../pages/HomePage";

const SortingAlgorithmVisualizer2 = () => {
  const numColumns = useContext(NumColumnsContext);
  const randomColumns = getRandomColumns(numColumns);
  const reversedColumns = getReverseColumns(numColumns);
  const nearlySortedColumns = getNearlySortedColumns(numColumns);

  const onOneBoardSolveClick = ({
    setBoard,
    sortFunction,
    getColumnsFunction,
  }: onOneBoardSolveClickParams) => {
    setBoard((prevBoard) => {
      const updatedBoard = getInitialBoard(
        prevBoard,
        getColumnsFunction,
        numColumns
      );
      sortFunction({
        board: updatedBoard,
        setBoard,
      });
      return updatedBoard;
    });
  };

  const sortOrders = [
    {
      sortOrderName: "Random",
      getColumnsFunction: getRandomColumns,
      initialColumns: randomColumns,
    },
    {
      sortOrderName: "Reverse",
      getColumnsFunction: getReverseColumns,
      initialColumns: reversedColumns,
    },
    {
      sortOrderName: "Nearly Sorted",
      getColumnsFunction: getNearlySortedColumns,
      initialColumns: nearlySortedColumns,
    },
  ];
  const algorithms = [
    { algorithmName: "Selection", sortFunction: selectionSort },
    { algorithmName: "Insertion", sortFunction: insertionSort },
    { algorithmName: "Bubble", sortFunction: bubbleSort },
    { algorithmName: "Heap", sortFunction: heapSort },
  ];
  return (
    <>
      <div className="board-table">
        {sortOrders.map((sortOrder) => (
          <div key={sortOrder.sortOrderName} className="board-columns">
            {algorithms.map((algorithm) => (
              <Board2
                key={algorithm.algorithmName}
                algorithmName={algorithm.algorithmName}
                getColumnsFunction={sortOrder.getColumnsFunction}
                onSolveClick={onOneBoardSolveClick}
                sortFunction={algorithm.sortFunction}
                initialColumns={sortOrder.initialColumns}
                sortOrder={sortOrder.sortOrderName}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SortingAlgorithmVisualizer2;
