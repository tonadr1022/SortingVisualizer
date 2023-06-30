import { board, column } from "../interfaces/interfaces";

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
  return initialColumns;
};

export const getInitialBoard = (
  board: board,
  initialColumnsFunction: (numColumns: number) => column[],
  numColumns: number
) => {
  const initialColumns = initialColumnsFunction(numColumns);
  const initialBoard = {
    ...board,
    columns: initialColumns,
    isSorted: false,
    isSorting: false,
  };
  return initialBoard;
};

export const getRandomBoard = (board: board, numColumns: number): board => {
  const initialColumns = getRandomColumns(numColumns);
  const initialBoard = {
    ...board,
    columns: initialColumns,
    isSorted: false,
    isSorting: false,
  };
  return initialBoard;
};

export const getReverseBoard = (board: board, numColumns: number): board => {
  const initialColumns = getRandomColumns(numColumns);
  const initialBoard = {
    ...board,
    columns: initialColumns,
    isSorted: false,
    isSorting: false,
  };
  return initialBoard;
};
