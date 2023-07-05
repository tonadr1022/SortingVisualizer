import { Link, useParams } from "react-router-dom";
import { useGetSortOrders } from "../components/sortOrders";
import { Algorithm, OptionsProps } from "../interfaces/interfaces";
import Options from "../components/ui/Options";
import Board from "../components/ui/Board";
import { algorithms } from "../components/algorithms";

const AlgorithmPage = ({
  onSolveAllClick,
  onResetAllClick,
  onNumColumnsChange,
}: OptionsProps) => {
  const { algorithmKey } = useParams();
  let algorithm: Algorithm = algorithms[0];

  if (algorithmKey) {
    algorithm = algorithms[algorithmKey.split("-")[0]];
  }

  const sortOrders = useGetSortOrders();

  return algorithm ? (
    <div>
      <Link to="/">
        <button>Back to All</button>
      </Link>

      <div>{algorithm.name}</div>
      <Options
        onNumColumnsChange={onNumColumnsChange}
        onSolveAllClick={onSolveAllClick}
        onResetAllClick={onResetAllClick}
      />
      <div>
        <table>
          <tbody>
            {Object.values(sortOrders).map((sortOrder) => (
              <tr>
                <td>
                  <div>{sortOrder.name}</div>
                  <Board
                    key={`${algorithm.name}:${sortOrder.key}`}
                    algorithmName={algorithm.name}
                    sortOrderName={sortOrder.name}
                    sortOrderKey={sortOrder.key}
                    sortFunction={algorithm.sortFunction}
                    initialColumns={sortOrder.initialColumns}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <div>No algorithm</div>
  );
};

export default AlgorithmPage;
