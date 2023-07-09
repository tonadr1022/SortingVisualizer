import { useParams } from "react-router";
import { SortOrder } from "../interfaces/interfaces";
import { useGetSortOrders } from "../components/sortOrders";
import Options from "../components/ui/Options";
import { algorithms } from "../components/algorithms";
import Board from "../components/ui/Board";

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
      <Options pageType="other" />
      <div>
        <table className="single-column">
          <tbody>
            {Object.values(algorithms).map((algorithm) => (
              <tr key={algorithm.key}>
                <td className="single-column">
                  <h3 className="board-name">{algorithm.name}</h3>
                  <Board algorithm={algorithm} sortOrder={sortOrder} />
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
