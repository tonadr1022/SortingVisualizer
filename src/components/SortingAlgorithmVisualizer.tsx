import { useState } from "react";
import Board from "./display/Board";
import Prompt from "./ui/Prompt";
import selectionSort from "../sortingAlgorithms.ts/selectionSort";
import { board, sortingAlgorithmParams } from "../interfaces/interfaces";
import insertionSort from "../sortingAlgorithms.ts/insertionSort";
import bubbleSort from "../sortingAlgorithms.ts/bubbleSort";
import heapSort from "../sortingAlgorithms.ts/heapSort";
import {
  getRandomBoard,
  getRandomColumns,
} from "../sortingAlgorithms.ts/getInitialBoard";
import { deepCopySimpleObject } from "./utils";

// const sortingAlgorithms: {
//   [key: string]: ({ board, setBoard }: sortingAlgorithmParams) => Promise<void>;
// } = {
//   Selection: selectionSort,
//   Insertion: insertionSort,
//   Bubble: bubbleSort,
// };

const SortingAlgorithmVisualizer = () => {
  const [numColumns, setNumColumns] = useState<number>(30);
  const randomColumns = getRandomColumns(30);

  const [selectionSortBoard, setSelectionSortBoard] = useState<board>({
    columns: randomColumns,
    isSorted: false,
    isSorting: false,
    algorithm: "Selection",
  });
  const [insertionSortBoard, setInsertionSortBoard] = useState<board>({
    columns: randomColumns,
    isSorted: false,
    isSorting: false,
    algorithm: "Insertion",
  });
  const [bubbleSortBoard, setBubbleSortBoard] = useState<board>({
    columns: randomColumns,
    isSorted: false,
    isSorting: false,
    algorithm: "Bubble",
  });
  const [heapSortBoard, setHeapSortBoard] = useState<board>({
    columns: randomColumns,
    isSorted: false,
    isSorting: false,
    algorithm: "Heap",
  });

  const boards = [
    selectionSortBoard,
    insertionSortBoard,
    bubbleSortBoard,
    heapSortBoard,
  ];
  // const setBoardFunctions: {
  //   [key: string]: React.Dispatch<React.SetStateAction<board>>;
  // } = {
  //   Selection: setSelectionSortBoard,
  //   Insertion: setInsertionSortBoard,
  //   Bubble: setBubbleSortBoard,
  // };

  const onNumColumnsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
  };

  const onResetClick = (): void => {
    setSelectionSortBoard((prevBoard) => ({
      ...prevBoard,
      columns: randomColumns,
      isSorted: false,
      isSorting: false,
    }));
    setInsertionSortBoard((prevBoard) => ({
      ...prevBoard,
      columns: randomColumns,
      isSorted: false,
      isSorting: false,
    }));
    setBubbleSortBoard((prevBoard) => ({
      ...prevBoard,
      columns: randomColumns,
      isSorted: false,
      isSorting: false,
    }));
    setHeapSortBoard((prevBoard) => ({
      ...prevBoard,
      columns: randomColumns,
      isSorted: false,
      isSorting: false,
    }));
  };

  const onOneBoardSolveClick = (board: board) => {
    const { algorithm } = board;
    switch (algorithm) {
      case "Selection":
        setSelectionSortBoard((prevBoard) => {
          const updatedBoard = getRandomBoard(prevBoard, numColumns);
          selectionSort({
            board: updatedBoard,
            setBoard: setSelectionSortBoard,
          });
          return updatedBoard;
        });
        break;
      case "Insertion":
        setInsertionSortBoard((prevBoard) => {
          const updatedBoard = getRandomBoard(prevBoard, numColumns);
          insertionSort({
            board: updatedBoard,
            setBoard: setInsertionSortBoard,
          });
          return updatedBoard;
        });
        break;
      case "Bubble":
        setBubbleSortBoard((prevBoard) => {
          const updatedBoard = getRandomBoard(prevBoard, numColumns);
          bubbleSort({
            board: updatedBoard,
            setBoard: setBubbleSortBoard,
          });
          return updatedBoard;
        });
        break;
      case "Heap":
        setHeapSortBoard((prevBoard) => {
          const updatedBoard = getRandomBoard(prevBoard, numColumns);
          heapSort({
            board: updatedBoard,
            setBoard: setHeapSortBoard,
          });
          return updatedBoard;
        });
        break;
    }
  };

  const onSolveAllClick = (): void => {
    const randomColumns = getRandomColumns(numColumns);
    setSelectionSortBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: deepCopySimpleObject(randomColumns),
      };
      selectionSort({
        board: updatedBoard,
        setBoard: setSelectionSortBoard,
      });
      return updatedBoard;
    });
    setInsertionSortBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: deepCopySimpleObject(randomColumns),
      };
      insertionSort({
        board: updatedBoard,
        setBoard: setInsertionSortBoard,
      });
      return updatedBoard;
    });
    setBubbleSortBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: deepCopySimpleObject(randomColumns),
      };
      bubbleSort({
        board: updatedBoard,
        setBoard: setBubbleSortBoard,
      });
      return updatedBoard;
    });
    setHeapSortBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: deepCopySimpleObject(randomColumns),
      };
      heapSort({
        board: updatedBoard,
        setBoard: setHeapSortBoard,
      });
      return updatedBoard;
    });
  };

  return (
    <>
      <Prompt
        onNumColumnsChange={onNumColumnsChange}
        onResetClick={onResetClick}
        onSolveAllClick={onSolveAllClick}
      />
      <div className="board-table">
        {boards.map((board) => (
          <Board
            key={board.algorithm}
            board={board}
            onSolveClick={onOneBoardSolveClick}
          />
        ))}
      </div>
    </>
  );
};

export default SortingAlgorithmVisualizer;
