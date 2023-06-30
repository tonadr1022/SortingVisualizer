import { pause } from "../components/utils";
import { sortingAlgorithmParams } from "../interfaces/interfaces";
import { swap } from "./sortingUtils";

const insertionSort = async ({
  board,
  setBoard,
}: sortingAlgorithmParams): Promise<void> => {
  const { columns, isSorting } = board;
  // if (isSorting) return;
  // if (!isSorting) board.isSorting = true;
  // setBoard((prevBoard) => ({ ...prevBoard }));
  // pointers for sorted part of array

  // grab first unsorted element

  // while that element is less than lower, swap

  // first el is sorted by default
  columns[0].isFinalOrder = true;

  // start at one to compare with first el
  for (let i = 1; i < columns.length; i++) {
    let j = i;

    while (j > 0 && columns[j].value < columns[j - 1].value) {
      columns[j].isCurrentElement = true;
      await pause();
      swap(columns, j, j - 1);
      columns[j - 1].isCurrentElement = false;
      j--;

      setBoard((prevBoard) => ({ ...prevBoard }));
    }
    // after j is in place, toggle final order and rerender board
    columns[j].isFinalOrder = true;
    setBoard((prevBoard) => ({ ...prevBoard }));
  }
  // set board to sorted
  setBoard((prevBoard) => ({
    ...prevBoard,
    isSorted: true,
    isSorting: false,
  }));
};

export default insertionSort;
