import { sortingAlgorithmParams } from "../interfaces/interfaces";
import { pause } from "../utils/utils";
import { swap } from "./sortingUtils";

const shellSort = async ({
  board,
  setBoard,
  numColumns,
  speedMultiplier,
}: sortingAlgorithmParams): Promise<void> => {
  const { columns } = board;

  // start with gap of half arr length and divide by two each interation
  for (
    let gap = Math.floor(columns.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < columns.length; i += gap) {
      columns[i].isComparedToElement = true;
    }
    setBoard((prevBoard) => ({ ...prevBoard }));

    // insertion sort for each section the gap divides
    for (let i = gap; i < columns.length; i++) {
      let j = i;
      while (j >= gap && columns[j].value < columns[j - gap].value) {
        columns[j].isCurrentElement = true;
        setBoard((prevBoard) => ({ ...prevBoard }));
        await pause({ numColumns, speedMultiplier });

        swap(columns, j, j - gap);
        columns[j - gap].isCurrentElement = false;
        setBoard((prevBoard) => ({ ...prevBoard }));
        j--;
      }
      if (gap === 1) {
        // after j is in place, toggle final order and rerender board
        columns[j].isFinalOrder = true;
        if (j > 0) columns[j - 1].isFinalOrder = true;
        setBoard((prevBoard) => ({ ...prevBoard }));
      }
    }
    // unset curr gap elements
    for (let i = gap; i < columns.length; i += gap) {
      columns[i].isComparedToElement = false;
    }
    setBoard((prevBoard) => ({ ...prevBoard }));
  }
};

export default shellSort;
