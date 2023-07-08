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
    const pivotIndex = Math.floor((low + high) / 2);
    console.log("old", columns[pivotIndex].value);

    const pivotValue = columns[pivotIndex].value;
    columns[pivotIndex].isCurrentElement = true;
    let i = low;
    let j = high;
    setBoard((prevBoard) => ({ ...prevBoard }));
    while (i <= j) {
      columns[i].isCurrentElement = true;
      columns[j].isCurrentElement = true;
      setBoard((prevBoard) => ({ ...prevBoard }));
      await pause({ numColumns, speedMultiplier });

      while (columns[i].value < pivotValue) {
        columns[i].isCurrentElement = false;
        i++;
      }
      while (columns[j].value > pivotValue) {
        columns[j].isCurrentElement = false;
        j--;
      }
      if (i <= j) {
        swap(columns, i, j);
        i++;
        j--;
      }
    }
    console.log("new", columns[pivotIndex].value);
    columns[pivotIndex].isCurrentElement = false;
    setBoard((prevBoard) => ({ ...prevBoard }));
    return i;
  };
  const quickSortHelper = async (low: number, high: number) => {
    const pivotIndex = await partition(low, high);
    if (low < pivotIndex - 1) {
      await quickSortHelper(low, pivotIndex - 1);
    }
    if (pivotIndex < high) {
      await quickSortHelper(pivotIndex, high);
    }
  };

  await quickSortHelper(0, columns.length - 1);
  console.log(columns.map((column) => column.value));
};

export default quickSort;
