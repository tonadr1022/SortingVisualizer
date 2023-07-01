import { useContext } from "react";
import selectionSort from "../sortingAlgorithms.ts/selectionSort";
import {
  column,
  onOneBoardSolveClickParams,
  onResetClickParams,
} from "../interfaces/interfaces";
import insertionSort from "../sortingAlgorithms.ts/insertionSort";
import bubbleSort from "../sortingAlgorithms.ts/bubbleSort";
import heapSort from "../sortingAlgorithms.ts/heapSort";
import {
  getFewUniqueColumns,
  getNearlySortedColumns,
  getRandomColumns,
  getReverseColumns,
} from "../utils/getInitialBoard";
import Board from "./ui/Board";
import { NumColumnsContext } from "../pages/HomePage";

const SortingAlgorithmVisualizer2 = () => {
  const numColumns = useContext(NumColumnsContext);
  const randomColumns = getRandomColumns(numColumns);
  const reversedColumns = getReverseColumns(numColumns);
  const nearlySortedColumns = getNearlySortedColumns(numColumns);
  const fewUniqueColumns = getFewUniqueColumns(numColumns);

  const onResetClick = ({
    setBoard,
    getColumnsFunction,
    sortOrderName,
  }: onResetClickParams) => {
    let columns: column[];
    if (sortOrderName === "Random") {
      columns = randomColumns;
    } else {
      columns = getColumnsFunction(numColumns);
    }
    setBoard((prevBoard) => ({ ...prevBoard, columns }));
    // getInitialBoard(prevBoard, getColumnsFunction, numColumns)
  };
  const onOneBoardSolveClick = ({
    setBoard,
    sortFunction,
    getColumnsFunction,
    sortOrderName,
  }: onOneBoardSolveClickParams) => {
    let columns: column[];
    if (sortOrderName === "Random") {
      columns = randomColumns;
    } else {
      columns = getColumnsFunction(numColumns);
    }
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
    {
      sortOrderName: "Few Unique",
      getColumnsFunction: getFewUniqueColumns,
      initialColumns: fewUniqueColumns,
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
              <Board
                onResetClick={onResetClick}
                key={algorithm.algorithmName}
                algorithmName={algorithm.algorithmName}
                sortOrderName={sortOrder.sortOrderName}
                getColumnsFunction={sortOrder.getColumnsFunction}
                onSolveClick={onOneBoardSolveClick}
                sortFunction={algorithm.sortFunction}
                initialColumns={sortOrder.initialColumns}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default SortingAlgorithmVisualizer2;
