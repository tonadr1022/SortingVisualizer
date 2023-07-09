import { sortingAlgorithmParams } from "../interfaces/interfaces";
import { pause } from "../utils/utils";

const mergeSort = async ({
  board,
  setBoard,
  numColumns,
  speedMultiplier,
}: sortingAlgorithmParams): Promise<void> => {
  const { columns } = board;

  async function merge(
    arr: number[],
    l: number,
    m: number,
    r: number
  ): Promise<void> {
    const n1 = m - l + 1; // num elements in left arr
    const n2 = r - m; // num elements in right arr

    // Create temp arrays
    const L = new Array(n1);
    const R = new Array(n2);

    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++) L[i] = arr[l + i];
    for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

    // Merge the temp arrays back into arr[l..r]

    let i = 0; // index of first subarray
    let j = 0; // index of second subarray
    let k = l; // index of merged subarray

    while (i < n1 && j < n2) {
      columns[k].isCurrentElement = true;
      setBoard((prevBoard) => ({ ...prevBoard }));
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        await pause({ numColumns, speedMultiplier });
        i++;
      } else {
        arr[k] = R[j];
        await pause({ numColumns, speedMultiplier });
        j++;
      }
      columns[k].isCurrentElement = false;
      k++;
    }

    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
  }

  // l is left idx, r is right idx
  async function mergeSortHelper(
    arr: number[],
    l: number,
    r: number
  ): Promise<void> {
    if (l >= r) {
      return;
    }

    const m = l + parseInt(String((r - l) / 2));
    await mergeSortHelper(arr, l, m);
    await mergeSortHelper(arr, m + 1, r);
    for (let i = l; i <= r; i++) {
      columns[i].isComparedToElement = true;
    }
    setBoard((prevBoard) => ({ ...prevBoard }));
    // await pause({ numColumns, speedMultiplier });
    await merge(arr, l, m, r);
    for (let i = l; i <= r; i++) {
      columns[i].isComparedToElement = false;
    }

    const newCols = columns.slice(0);
    for (let i = 0; i < columns.length; i++) {
      newCols[i].value = arr[i];
    }
    setBoard((prevBoard) => ({ ...prevBoard, columns: newCols }));
  }

  setBoard((prevBoard) => ({ ...prevBoard, columns: columns.slice(0) }));

  await mergeSortHelper(
    columns.map((col) => col.value),
    0,
    columns.length - 1
  );
  setBoard((prevBoard) => ({
    ...prevBoard,
    columns: columns.map((col) => ({ ...col, isFinalOrder: true })),
  }));
};

export default mergeSort;
