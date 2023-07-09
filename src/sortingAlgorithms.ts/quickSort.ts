import { sortingAlgorithmParams } from "../interfaces/interfaces";
import { pause } from "../utils/utils";
import { swap } from "./sortingUtils";

const quickSort = async ({
  board,
  setBoard,
  numColumns,
  speedMultiplier,
}: sortingAlgorithmParams): Promise<void> => {
  const { columns } = board;

  const partition = async (low: number, high: number): Promise<number> => {
    const pivotIndex = low;
    const pivotValue = columns[pivotIndex].value;
    let i = low;
    let j = high;

    while (i <= j) {
      columns[i].isCurrentElement = true;
      columns[j].isCurrentElement = true;
      setBoard((prevBoard) => ({ ...prevBoard }));
      await pause({ numColumns, speedMultiplier });
      columns[i].isCurrentElement = false;
      columns[j].isCurrentElement = false;
      while (columns[i].value < pivotValue) {
        // columns[i].isCurrentElement = false;
        i++;
      }
      while (columns[j].value > pivotValue) {
        // columns[j].isCurrentElement = false;
        j--;
      }
      setBoard((prevBoard) => ({ ...prevBoard }));
      if (i <= j) {
        swap(columns, i, j);
        i++;
        j--;
        setBoard((prevBoard) => ({ ...prevBoard }));
      }
    }
    return i;
  };
  const quickSortHelper = async (low: number, high: number) => {
    const pivotIndex = await partition(low, high);
    if (low < pivotIndex - 1) {
      await quickSortHelper(low, pivotIndex - 1);
    }
    for (let i = low; i <= pivotIndex - 1; i++) {
      columns[i].isFinalOrder = true;
    }
    setBoard((prevBoard) => ({ ...prevBoard }));
    if (pivotIndex < high) {
      await quickSortHelper(pivotIndex, high);
    }
    for (let i = pivotIndex; i <= high; i++) {
      columns[i].isFinalOrder = true;
    }
    setBoard((prevBoard) => ({ ...prevBoard }));
  };

  await quickSortHelper(0, columns.length - 1);
};

export default quickSort;
