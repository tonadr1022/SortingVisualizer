import { pause } from "../components/utils";
import { sortingAlgorithmParams } from "../interfaces/interfaces";
import { swap } from "./sortingUtils";

const selectionSort = async ({
  board,
  setBoard,
}: sortingAlgorithmParams): Promise<void> => {
  const { columns, isSorting } = board;
  // if (isSorting) return;
  // if (!isSorting) board.isSorting = true;
  // setBoard((prevBoard) => ({ ...prevBoard }));
  // iterate through array from zero. For each iteration, find min remaining and swap with val at i if it is less than
  for (let i = 0; i < columns.length; i++) {
    // find the min remaining element
    let currMinIndex = i;
    for (let j = i + 1; j < columns.length; j++) {
      if (columns[j].value < columns[currMinIndex].value) {
        currMinIndex = j;
      }

      // update current element and rerender board
      columns[j].isCurrentElement = true;
      columns[j - 1].isCurrentElement = false;
      setBoard((prevBoard) => ({ ...prevBoard }));
      await pause();
    }

    // swap if new minimum
    if (currMinIndex !== i) {
      swap(columns, i, currMinIndex);
    }
    // ith column now in final order, unset curr element and rerender board
    columns[i].isFinalOrder = true;
    columns[i].isCurrentElement = false;
    columns[columns.length - 1].isCurrentElement = false;
    setBoard((prevBoard) => ({ ...prevBoard }));
  }
  // set board to sorted
  setBoard((prevBoard) => ({
    ...prevBoard,
    isSorted: true,
    isSorting: false,
  }));
};
export default selectionSort;
