import { Algorithm, board, SortOrder } from "../../interfaces/interfaces";
import { useContext, useEffect, useState } from "react";

import ColumnComponent from "../display/ColumnComponent";
import {
  IsSolveAllContext,
  NumColumnsContext,
  IsResetAllContext,
} from "../../App";
import useBoardReset from "../../hooks/useBoardReset";
import useBoardSolve from "../../hooks/useBoardSolve";
import { useNavigate } from "react-router-dom";

interface BoardProps {
  algorithm: Algorithm;
  sortOrder: SortOrder;
  isSingleBoard?: boolean;
}

const Board = ({ algorithm, sortOrder, isSingleBoard }: BoardProps) => {
  const { key: algorithmKey, name: algorithmName, sortFunction } = algorithm;
  const { key: sortOrderKey, initialColumns } = sortOrder;
  const [board, setBoard] = useState<board>({
    columns: initialColumns,
    algorithm: algorithmName,
  });
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const { isSolveAll } = useContext(IsSolveAllContext);
  const { isResetAll } = useContext(IsResetAllContext);
  const { numColumns } = useContext(NumColumnsContext);

  const handleBoardSolve = useBoardSolve({
    setBoard,
    sortFunction,
    sortOrderKey,
  });
  const handleBoardReset = useBoardReset({ setBoard, sortOrderKey });

  const handleViewBoard = () => {
    navigate(`/algorithms/${algorithmKey}/${sortOrderKey}`);
  };

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
    <div
      onClick={handleBoardSolve}
      className="board-columns-container"
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      style={{ height: "100%" }}>
      {!isSingleBoard && isHovered && (
        <div>
          <button className="overlay-button" onClick={handleViewBoard}>
            View
          </button>
        </div>
      )}
      {board.columns.map((column, i) => (
        <ColumnComponent key={i} column={column} />
      ))}
    </div>
  );
};

export default Board;
