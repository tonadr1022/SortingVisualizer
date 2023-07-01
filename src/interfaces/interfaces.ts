export interface board {
  columns: column[];
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

export interface onOneBoardSolveClickParams {
  getColumnsFunction: (numColumns: number) => column[];
  sortFunction: ({ board, setBoard }: sortingAlgorithmParams) => Promise<void>;
  setBoard: (value: React.SetStateAction<board>) => void;
  sortOrderName: string;
}
export interface onResetClickParams {
  setBoard: (value: React.SetStateAction<board>) => void;
  getColumnsFunction: (numColumns: number) => column[];
  sortOrderName: string;
}
