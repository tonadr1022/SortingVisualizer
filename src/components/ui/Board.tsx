import {
  board,
  Column,
  sortingAlgorithmParams,
} from "../../interfaces/interfaces";
import { useContext, useEffect, useState } from "react";

import ColumnComponent from "../display/ColumnComponent";
import {
  IsSolveAllContext,
  NumColumnsContext,
  IsResetAllContext,
} from "../../App";
import useBoardReset from "../../hooks/useBoardReset";
import useBoardSolve from "../../hooks/useBoardSolve";

interface BoardProps {
  algorithmName: string;
  initialColumns: Column[];
  sortOrderName: string;
  sortOrderKey: string;
  sortFunction: ({
    board,
    setBoard,
    numColumns,
    speedMultiplier,
  }: sortingAlgorithmParams) => Promise<void>;
}

const Board = ({
  algorithmName,
  sortOrderKey,
  initialColumns,
  sortFunction,
}: BoardProps) => {
  const [board, setBoard] = useState<board>({
    columns: initialColumns,
    algorithm: algorithmName,
  });

  const { isSolveAll } = useContext(IsSolveAllContext);
  const { isResetAll } = useContext(IsResetAllContext);
  const { numColumns } = useContext(NumColumnsContext);

  const handleBoardSolve = useBoardSolve({
    setBoard,
    sortFunction,
    sortOrderKey,
  });
  const handleBoardReset = useBoardReset({ setBoard, sortOrderKey });

  useEffect(() => {
    if (isSolveAll) {
      handleBoardSolve();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolveAll]);

  useEffect(() => {
    if (isResetAll || (numColumns && numColumns > 0)) {
      handleBoardReset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isResetAll, numColumns]);

  return (
    <div className="board-columns-container" onClick={handleBoardSolve}>
      {board.columns.map((column, i) => (
        <ColumnComponent key={i} column={column} />
      ))}
    </div>
  );
};

export default Board;
