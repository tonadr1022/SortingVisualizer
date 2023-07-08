export interface board {
  columns: Column[];
  algorithm: string;
}
export interface Column {
  value: number;
  isFinalOrder: boolean;
  isCurrentElement: boolean;
  isSeen: boolean;
  isComparedToElement: boolean;
}
export interface sortingAlgorithmParams {
  board: board;
  setBoard: React.Dispatch<React.SetStateAction<board>>;
  numColumns: number;
  speedMultiplier: number;
}

export interface HandleBoardSolveParams {
  sortFunction: ({
    board,
    setBoard,
    numColumns,
    speedMultiplier,
  }: sortingAlgorithmParams) => Promise<void>;
  setBoard: (value: React.SetStateAction<board>) => void;
  sortOrderKey: string;
}
export interface HandleBoardResetParams {
  setBoard: (value: React.SetStateAction<board>) => void;
  sortOrderKey: string;
}

export interface InitialColumns {
  randomColumns: Column[];
  reversedColumns: Column[];
  nearlySortedColumns: Column[];
  fewUniqueColumns: Column[];
}

export interface Algorithm {
  key: string;
  name: string;
  sortFunction: ({
    board,
    setBoard,
    numColumns,
  }: sortingAlgorithmParams) => Promise<void>;
}

export interface SortOrder {
  key: string;
  name: string;
  getColumnsFunction: () => Column[];
  initialColumns: Column[];
}
