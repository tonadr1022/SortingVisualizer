import { useContext } from "react";
import { Column } from "../interfaces/interfaces";
import { swap } from "../sortingAlgorithms.ts/sortingUtils";
import { NumColumnsContext } from "../App";

export const useGetRandomColumns = (): Column[] => {
  const { numColumns } = useContext(NumColumnsContext);
  const initialColumns: Column[] = [];
  for (let i = 0; i < numColumns; i++) {
    initialColumns.push({
      value: Math.floor(Math.random() * numColumns + 1),
      isFinalOrder: false,
      isCurrentElement: false,
      isSeen: false,
      isComparedToElement: false,
    });
  }
  const randIndex = Math.floor(Math.random() * numColumns);
  initialColumns[randIndex].value = numColumns;
  return initialColumns;
};

export const useGetReverseColumns = (): Column[] => {
  const { numColumns } = useContext(NumColumnsContext);
  const initialColumns: Column[] = [];
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

export const useGetNearlySortedColumns = (): Column[] => {
  const { numColumns } = useContext(NumColumnsContext);
  const initialColumns: Column[] = [];
  for (let i = 1; i <= numColumns; i++) {
    initialColumns.push({
      value: i,
      isFinalOrder: false,
      isCurrentElement: false,
      isSeen: false,
      isComparedToElement: false,
    });
  }
  const numColumnsToSwap = Math.floor(numColumns / 8);
  for (let i = 0; i < numColumnsToSwap; i++) {
    const indexOne = Math.floor(Math.random() * numColumns);
    const indexTwo = Math.floor(Math.random() * numColumns);
    swap(initialColumns, indexOne, indexTwo);
  }
  return initialColumns;
};

const NUM_UNIQUE_COLUMNS = 5;
export const useGetFewUniqueColumns = (): Column[] => {
  const { numColumns } = useContext(NumColumnsContext);
  const initialColumns: Column[] = [];
  const values = [];
  for (let i = 1; i <= NUM_UNIQUE_COLUMNS; i++) {
    values.push(Math.floor((i / 5) * numColumns));
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
