import { column, board } from "./interfaces/interfaces";

const selectionSort = async (
  columns: column[],
  setBoard: React.Dispatch<React.SetStateAction<board>>
) => {
  // iterate through array
  for (let i = 0; i < columns.length; i++) {
    // for each iteration, find the min and select it
    let currMinIndex = i;
    // find the min remaining element
    for (let j = i + 1; j < columns.length; j++) {
      if (columns[j].value < columns[currMinIndex].value) {
        currMinIndex = j;
      }
      await new Promise((resolve) => setTimeout(resolve, 20));

      columns[j].isColorTwo = true;

      columns[j - 1].isColorTwo = false;
      setBoard(() => ({ columns: [...columns] }));
    }

    // swap
    if (currMinIndex !== i) {
      const temp = columns[i];
      columns[i] = columns[currMinIndex];
      columns[currMinIndex] = temp;
    }
    columns[i].isColorOne = true;
    columns[i].isColorTwo = false;
    columns[columns.length - 1].isColorTwo = false;
    setBoard(() => ({ columns: [...columns] }));
  }
};
// const selectionSort = async (
//   columns: column[],
//   setBoard: React.Dispatch<React.SetStateAction<board>>
// ) => {
//   for (let i = 0; i < columns.length; i++) {
//     let currMinIndex = i;

//     for (let j = i + 1; j < columns.length; j++) {
//       if (columns[j].value < columns[currMinIndex].value) {
//         currMinIndex = j;
//       }
//     }

//     const temp = columns[i];
//     columns[i] = columns[currMinIndex];
//     columns[currMinIndex] = temp;

//     for (let j = 0; j < columns.length; j++) {
//       columns[j].isColorOne = j === currMinIndex || j === i;
//     }

//     setBoard((prevBoard) => ({ columns: [...columns] }));
//     await new Promise((resolve) => setTimeout(resolve, 10));
//   }
// };
export default selectionSort;
