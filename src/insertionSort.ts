import { column, board } from "./interfaces/interfaces";

const insertionSort = async (
  columns: column[],
  setBoard: React.Dispatch<React.SetStateAction<board>>
) => {
  // pointers for sorted part of array

  // grab first unsorted element

  // while that element is less than lower, swap
  columns[0].isColorOne = true;
  for (let i = 1; i < columns.length; i++) {
    let j = i;
    columns[i].isColorOne = true;
    while (j > 0 && columns[j].value < columns[j - 1].value) {
      columns[j].isColorTwo = true;
      await new Promise((resolve) => setTimeout(resolve, 20));
      const temp = columns[j];
      columns[j] = columns[j - 1];
      columns[j - 1] = temp;
      columns[j - 1].isColorTwo = false;

      j--;

      setBoard(() => ({ columns: [...columns] }));
    }
    // setBoard(() => ({ columns: [...columns] }));
    const vals = columns.map((col) => col.value);
    console.log(vals);

    setBoard(() => ({ columns: [...columns] }));
  }
  //   setBoard(() => ({
  //     columns: columns.map((column) => ({
  //       value: column.value,
  //       isColorOne: true,
  //       isColorTwo: false,
  //       isSeen: false,
  //     })),
  //   }));
};
export default insertionSort;
