import Column from "./Column";
import { board } from "../../interfaces/interfaces";
interface props {
  board: board;
  onSolveClick: (board: board) => void;
}
const Board = ({ board, onSolveClick }: props) => {
  const { algorithm, columns } = board;

  return (
    <div className="board">
      <h6 style={{ margin: 0 }}>{algorithm}</h6>
      <div
        className="board-columns-container"
        onClick={() => onSolveClick(board)}>
        {columns.map((column, i) => (
          <Column key={i} column={column} />
        ))}
      </div>
    </div>
  );
};

export default Board;
