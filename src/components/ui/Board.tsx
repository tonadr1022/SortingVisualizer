import Column from "../display/Column";
import {
  board,
  column,
  onOneBoardSolveClickParams,
  onResetClickParams,
  sortingAlgorithmParams,
} from "../../interfaces/interfaces";
import { useContext, useEffect, useState } from "react";
import {
  IsSolveAllContext,
  NumColumnsContext,
  ResetAllContext,
} from "../../pages/HomePage";

interface BoardProps {
  algorithmName: string;
  initialColumns: column[];
  sortOrderName: string;
  getColumnsFunction: (numColumns: number) => column[];
  onResetClick: ({
    setBoard,
    getColumnsFunction,
    sortOrderName,
  }: onResetClickParams) => void;
  onSolveClick: ({
    setBoard,
    getColumnsFunction,
  }: onOneBoardSolveClickParams) => void;
  sortFunction: ({ board, setBoard }: sortingAlgorithmParams) => Promise<void>;
}

const Board = ({
  onResetClick,
  sortOrderName,
  algorithmName,
  getColumnsFunction,
  initialColumns,
  onSolveClick,
  sortFunction,
}: BoardProps) => {
  const [board, setBoard] = useState<board>({
    columns: initialColumns,
    algorithm: algorithmName,
  });
  console.log(board);

  const isSolveAll = useContext(IsSolveAllContext);
  const resetAll = useContext(ResetAllContext);
  const numColumns = useContext(NumColumnsContext);

  useEffect(() => {
    if (isSolveAll) {
      onSolveClick({
        setBoard,
        sortFunction,
        getColumnsFunction,
        sortOrderName: sortOrderName,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSolveAll]);

  useEffect(() => {
    if (resetAll || numColumns > 0) {
      onResetClick({
        setBoard,
        getColumnsFunction,
        sortOrderName: sortOrderName,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetAll, numColumns]);

  return (
    <div className="board">
      <h6 style={{ margin: 0 }}>{algorithmName}</h6>
      <div
        className="board-columns-container"
        onClick={() =>
          onSolveClick({
            setBoard,
            sortFunction,
            getColumnsFunction,
            sortOrderName,
          })
        }>
        {board.columns.map((column, i) => (
          <Column key={i} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Board;
