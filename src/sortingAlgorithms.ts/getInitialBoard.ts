import { board, column } from "../interfaces/interfaces";

export const getRandomColumns = (numColumns: number): column[] => {
  const initialColumns: column[] = [];
  for (let i = 0; i < numColumns; i++) {
    initialColumns.push({
      value: Math.floor(Math.random() * 30),
      isFinalOrder: false,
      isCurrentElement: false,
      isSeen: false,
    });
  }
  return initialColumns;
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
