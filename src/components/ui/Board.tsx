import Column from "../display/Column";
import {
  board,
  column,
  onOneBoardSolveClickParams,
  sortingAlgorithmParams,
} from "../../interfaces/interfaces";
import { useContext, useEffect, useState } from "react";
import { getInitialBoard } from "../../utils/getInitialBoard";
import {
  IsSolveAllContext,
  NumColumnsContext,
  ResetAllContext,
} from "../../pages/HomePage";

interface props {
  algorithmName: string;
  initialColumns: column[];
  sortOrder: string;
  getColumnsFunction: (numColumns: number) => column[];
  onSolveClick: ({
    setBoard,
    getColumnsFunction,
  }: onOneBoardSolveClickParams) => void;
  sortFunction: ({ board, setBoard }: sortingAlgorithmParams) => Promise<void>;
}

const Board2 = ({
  algorithmName,
  getColumnsFunction,
  initialColumns,
  onSolveClick,
  sortFunction,
}: props) => {
  const [board, setBoard] = useState<board>({
    columns: initialColumns,
    algorithm: algorithmName,
    isSorting: false,
  });

  const isSolveAll = useContext(IsSolveAllContext);
  const resetAll = useContext(ResetAllContext);
  const numColumns = useContext(NumColumnsContext);

  useEffect(() => {
    if (isSolveAll) {
      onSolveClick({
        setBoard,
        sortFunction,
        getColumnsFunction,
      });
    }
  }, [isSolveAll]);

  useEffect(() => {
    if (resetAll || numColumns > 0) {
      setBoard((prevBoard) =>
        getInitialBoard(prevBoard, getColumnsFunction, numColumns)
      );
    }
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
          })
        }>
        {board.columns.map((column, i) => (
          <Column key={i} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Board2;
