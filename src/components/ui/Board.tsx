import {
  board,
  Column,
  HandleBoardResetParams,
  HandleBoardSolveParams,
  sortingAlgorithmParams,
} from "../../interfaces/interfaces";
import { useContext, useEffect, useState } from "react";
import {
  IsSolveAllContext,
  NumColumnsContext,
  ResetAllContext,
} from "../../pages/HomePage";
import ColumnComponent from "../display/ColumnComponent";

interface BoardProps {
  algorithmName: string;
  initialColumns: Column[];
  sortOrderName: string;
  sortOrderKey: string;
  handleBoardReset: ({
    setBoard,
    sortOrderKey,
  }: HandleBoardResetParams) => void;
  handleBoardSolve: ({ setBoard }: HandleBoardSolveParams) => void;
  sortFunction: ({ board, setBoard }: sortingAlgorithmParams) => Promise<void>;
}

const Board = ({
  handleBoardReset,
  algorithmName,
  sortOrderKey,
  initialColumns,
  handleBoardSolve,
  sortFunction,
}: BoardProps) => {
  const [board, setBoard] = useState<board>({
    columns: initialColumns,
    algorithm: algorithmName,
  });

  const isSolveAll = useContext(IsSolveAllContext);
  const resetAll = useContext(ResetAllContext);
  const numColumns = useContext(NumColumnsContext);

  useEffect(() => {
    if (isSolveAll) {
      handleBoardSolve({
        setBoard,
        sortFunction,
        sortOrderKey,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolveAll]);

  useEffect(() => {
    if (resetAll || numColumns > 0) {
      handleBoardReset({
        setBoard,
        sortOrderKey,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetAll, numColumns]);

  return (
    <div className="board">
      <div
        className="board-columns-container"
        onClick={() =>
          handleBoardSolve({
            setBoard,
            sortFunction,
            sortOrderKey,
          })
        }>
        {board.columns.map((column, i) => (
          <ColumnComponent key={i} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Board;
