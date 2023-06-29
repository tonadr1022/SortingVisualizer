import { useState } from "react";
import Board from "./display/Board";
import Prompt from "./ui/Prompt";
// import selectionSort from "../selectionSort";
import { board, column } from "../interfaces/interfaces";

const SortingAlgorithmVisualizer = () => {
  const [board, setBoard] = useState<board>({ columns: [] });

  const onGenerateBoardClick = (): void => {
    const newBoard: board = { columns: [] };
    for (let i = 0; i < 50; i++) {
      newBoard.columns.push({
        value: Math.floor(Math.random() * 30),
        isMin: false,
      });
    }
    setBoard(newBoard);
  };
  const selectionSort = async (columns: column[]) => {
    console.log(board);
    // iterate through array
    for (let i = 0; i < columns.length; i++) {
      // for each iteration, find the min and select it
      let currMinIndex = i;

      // find the min remaining element
      for (let j = i + 1; j < columns.length; j++) {
        if (columns[j].value < columns[currMinIndex].value) {
          currMinIndex = j;
        }
      }
      columns[currMinIndex].isMin = true;
      setBoard(() => ({ columns: [...columns] }));
      await new Promise((resolve) => setTimeout(resolve, 50));

      // swap
      if (currMinIndex !== i) {
        const temp = columns[i];
        columns[i] = columns[currMinIndex];
        columns[currMinIndex] = temp;
      }

      setBoard(() => ({ columns: [...columns] }));
    }
    console.log(board);
    return board;
  };

  const onSolveClick = (): void => {
    if (board) {
      selectionSort(board.columns);
    }
  };

  return (
    <>
      <Prompt
        onGenerateBoardClick={onGenerateBoardClick}
        onSolveClick={onSolveClick}
      />
      {board.columns.length >= 0 ? <Board board={board} /> : null}
    </>
  );
};

export default SortingAlgorithmVisualizer;
