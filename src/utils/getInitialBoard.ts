import { board, column } from "../interfaces/interfaces";
import { swap } from "../sortingAlgorithms.ts/sortingUtils";

export const getRandomColumns = (numColumns: number): column[] => {
  const initialColumns: column[] = [];
  for (let i = 0; i < numColumns; i++) {
    initialColumns.push({
      value: Math.floor(Math.random() * 30),
      isFinalOrder: false,
      isCurrentElement: false,
      isSeen: false,
      isComparedToElement: false,
    });
  }
  return initialColumns;
};
export const getReverseColumns = (numColumns: number): column[] => {
  const initialColumns: column[] = [];
  for (let i = numColumns; i > 0; i--) {
    initialColumns.push({
      value: i,
      isFinalOrder: false,
      isCurrentElement: false,
      isSeen: false,
      isComparedToElement: false,
    });
  }
  return initialColumns;
};
export const getNearlySortedColumns = (numColumns: number): column[] => {
  const initialColumns: column[] = [];
  for (let i = 0; i < numColumns; i++) {
    initialColumns.push({
      value: i,
      isFinalOrder: false,
      isCurrentElement: false,
      isSeen: false,
      isComparedToElement: false,
    });
  }
  const numColumnsToSwap = Math.floor(numColumns / 10);
  for (let i = 0; i < numColumnsToSwap; i++) {
    const indexOne = Math.floor(Math.random() * numColumns);
    const indexTwo = Math.floor(Math.random() * numColumns);
    swap(initialColumns, indexOne, indexTwo);
  }
  return initialColumns;
};

const NUM_UNIQUE_COLUMNS = 5;
export const getFewUniqueColumns = (numColumns: number): column[] => {
  const initialColumns: column[] = [];
  const values = [];
  for (let i = 0; i < NUM_UNIQUE_COLUMNS; i++) {
    values.push(Math.floor(Math.random() * numColumns));
  }
  for (let i = 0; i < numColumns; i++) {
    const value = values[Math.floor(Math.random() * NUM_UNIQUE_COLUMNS)];
    initialColumns.push({
      value: value,
      isFinalOrder: false,
      isCurrentElement: false,
      isSeen: false,
      isComparedToElement: false,
    });
  }
  return initialColumns;
};

export const getInitialBoard = (
  board: board,
  initialColumnsFunction: (numColumns: number) => column[],
  numColumns: number
) => {
  const initialColumns = initialColumnsFunction(numColumns);
  const initialBoard: board = {
    ...board,
    columns: initialColumns,
  };
  return initialBoard;
};
