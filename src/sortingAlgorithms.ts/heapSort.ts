import { pause } from "../utils/utils";
import { sortingAlgorithmParams } from "../interfaces/interfaces";
import { swap } from "./sortingUtils";

/**
 * Sorts board using heap sort.
 *
 *
 * @param param
 */
const heapSort = async ({ board, setBoard }: sortingAlgorithmParams) => {
  const { columns } = board;
  const parent = (i: number): number => Math.floor((i - 1) / 2);

  /**
   * percolates an element down. Picks the greatest of
   * possible children to swap and swaps if the greatest is > element at i
   *
   * @param length length of array to consider
   * @param i index of element to percolate
   */
  const percolateDown = async (length: number, i: number): Promise<void> => {
    const leftIdx = Math.floor(i * 2 + 1);
    const rightIdx = leftIdx + 1;
    let max = i;
    // if has left child and left child is greater than val, set leftIdx to max
    if (leftIdx < length && columns[leftIdx].value > columns[max].value) {
      max = leftIdx;
    }
    // if right child exists and is bigger than current max (which could be left child) set it to max
    if (rightIdx < length && columns[rightIdx].value > columns[max].value) {
      max = rightIdx;
    }
    columns[i].isCurrentElement = true;
    setBoard((prevBoard) => ({ ...prevBoard }));
    await pause();
    columns[i].isCurrentElement = false;
    // if we found a max among children, swap and percolate down
    if (max !== i) {
      swap(columns, i, max);
      setBoard((prevBoard) => ({ ...prevBoard }));
      await percolateDown(length, max);
    }
  };

  // heapify the array by percolating down from last internal node to the root
  for (let i = parent(columns.length - 1); i >= 0; i--) {
    await percolateDown(columns.length, i);
  }

  // swap root and last element of unsorted part of array and
  // percolate the new root down to restore max heap property
  for (let i = columns.length - 1; i >= 0; i--) {
    swap(columns, 0, i);
    await percolateDown(i, 0);
    await pause();
    columns[i].isFinalOrder = true;
    setBoard((prevBoard) => ({ ...prevBoard }));
  }
};

export default heapSort;
