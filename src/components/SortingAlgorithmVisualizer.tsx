import { useState } from "react";
import Board from "./display/Board";
import Prompt from "./ui/Prompt";
import selectionSort from "../selectionSort";
import { board, column } from "../interfaces/interfaces";
import insertionSort from "../insertionSort";

const SortingAlgorithmVisualizer = () => {
  const [selectionSortBoard, setSelectionSortBoard] = useState<board>({
    columns: [],
  });
  const [insertionSortBoard, setInsertionSortBoard] = useState<board>({
    columns: [],
  });

  const onGenerateBoardClick = (): void => {
    // const newBoard: board = { columns: [] };
    const columns: column[] = [];
    for (let i = 0; i < 30; i++) {
      columns.push({
        value: Math.floor(Math.random() * 30),
        isColorOne: false,
        isColorTwo: false,
        isSeen: false,
      });
    }
    setSelectionSortBoard({ columns: JSON.parse(JSON.stringify(columns)) });
    setInsertionSortBoard({ columns: JSON.parse(JSON.stringify(columns)) });
  };

  const onSolveClick = (): void => {
    selectionSort(selectionSortBoard.columns, setSelectionSortBoard);
    insertionSort(insertionSortBoard.columns, setInsertionSortBoard);
  };

  return (
    <>
      <Prompt
        onGenerateBoardClick={onGenerateBoardClick}
        onSolveClick={onSolveClick}
      />
      <div className="board-table">
        {selectionSortBoard.columns.length ? (
          <Board board={selectionSortBoard} />
        ) : null}
        {insertionSortBoard.columns.length ? (
          <Board board={insertionSortBoard} />
        ) : null}
      </div>
    </>
  );
};

export default SortingAlgorithmVisualizer;
