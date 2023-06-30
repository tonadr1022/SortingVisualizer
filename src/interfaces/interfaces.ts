export interface board {
  columns: column[];
  isSorted: boolean;
  isSorting: boolean;
  algorithm: string;
}
export interface column {
  value: number;
  isFinalOrder: boolean;
  isCurrentElement: boolean;
  isSeen: boolean;
  isComparedToElement: boolean;
}
export interface sortingAlgorithmParams {
  board: board;
  setBoard: React.Dispatch<React.SetStateAction<board>>;
}
