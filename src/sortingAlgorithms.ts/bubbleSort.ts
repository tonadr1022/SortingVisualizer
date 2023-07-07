import { pause } from "../utils/utils";
import { sortingAlgorithmParams } from "../interfaces/interfaces";
import { swap } from "./sortingUtils";
/**
 * traverse from start to end, comparing adjacent elements. Each traversal, start at the end and swap
 * until reaching the end of the sorted part, placing the next smallest element next to it.
 * place higher of two adjacent elements to the right until fully sorted on final pass.
 *
 * @param board
 * @param setBoard
 */
const bubbleSort = async ({
  board,
  setBoard,
}: sortingAlgorithmParams): Promise<void> => {
  const { columns } = board;
  console.log("so");
  for (let i = 0; i < columns.length; i++) {
    let swapped = false;

    for (let j = 0; j < columns.length - i - 1; j++) {
      // set current element and wait
      columns[j].isCurrentElement = true;
      setBoard((prevBoard) => ({
        ...prevBoard,
        columns: JSON.parse(JSON.stringify(columns)),
      }));
      await pause();
      // if value at curr is less than curr-1, swap
      if (columns[j].value > columns[j + 1].value) {
        swap(columns, j, j + 1);
        swapped = true;
      }
      // element at j is no longer the current element
      columns[j].isCurrentElement = false;
      setBoard((prevBoard) => ({
        ...prevBoard,
        columns: JSON.parse(JSON.stringify(columns)),
      }));
    }

    // after ith column in position, update its state
    columns[columns.length - i - 1].isFinalOrder = true;
    columns[columns.length - i - 1].isCurrentElement = false;
    setBoard((prevBoard) => ({
      ...prevBoard,
      columns: JSON.parse(JSON.stringify(columns)),
    }));
    if (!swapped) {
      setBoard((prevBoard) => ({
        ...prevBoard,
        isSorting: false,
        columns: columns.map((col) => ({ ...col, isFinalOrder: true })),
      }));
      break;
    }
  }
};

export default bubbleSort;
