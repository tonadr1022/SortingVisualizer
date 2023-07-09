import { useParams } from "react-router";
import { SortOrder } from "../interfaces/interfaces";
import { useGetSortOrders } from "../components/sortOrders";
import { Link } from "react-router-dom";
import Options from "../components/ui/Options";
import { algorithms } from "../components/algorithms";
import Board from "../components/ui/Board";
import HomeButton from "../components/ui/HomeButton";

const SortOrderPage = () => {
  const { sortOrderKey } = useParams();
  const sortOrders = useGetSortOrders();

  // initialize with default
  let sortOrder: SortOrder = sortOrders.random;

  if (sortOrderKey) {
    ({ [sortOrderKey]: sortOrder } = sortOrders);
  }

  return (
    <main>
      <h1>{sortOrder.name} Order</h1>
      <Options isHomePage={false} />
      <div>
        <table className="single-column">
          <tbody>
            {Object.values(algorithms).map((algorithm) => (
              <tr key={algorithm.key}>
                <td className="single-column">
                  <h3 className="board-name">{algorithm.name}</h3>
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
    </main>
  );
};

export default SortOrderPage;
