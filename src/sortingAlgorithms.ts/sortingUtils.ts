import { column } from "../interfaces/interfaces";

/**
 * swaps two elements of column array in place
 *
 * @param columns columns array to mutate
 * @param i first index to swap
 * @param j second index to swap
 */
export const swap = (columns: Column[], i: number, j: number): void => {
  const temp = columns[i];
  columns[i] = columns[j];
  columns[j] = temp;
};
