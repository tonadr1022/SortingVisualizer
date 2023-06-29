import Column from "./Column";
import { board } from "../../interfaces/interfaces";
interface props {
  board: board;
}
const Board = ({ board }: props) => {
  console.log("rerender", board);
  return (
    <div className="board">
      {board.columns.map((column, i) => (
        <Column key={i} column={column} />
      ))}
    </div>
  );
};

export default Board;
