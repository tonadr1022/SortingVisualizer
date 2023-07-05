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
}

export interface HandleBoardSolveParams {
  sortFunction: ({ board, setBoard }: sortingAlgorithmParams) => Promise<void>;
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
  sortFunction: ({ board, setBoard }: sortingAlgorithmParams) => Promise<void>;
}

export interface OptionsProps {
  onSolveAllClick: () => void;
  onResetAllClick: () => void;
  onNumColumnsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
