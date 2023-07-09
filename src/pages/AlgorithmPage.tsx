import { useParams } from "react-router-dom";
import { useGetSortOrders } from "../components/sortOrders";
import { Algorithm } from "../interfaces/interfaces";
import Options from "../components/ui/Options";
import Board from "../components/ui/Board";
import { algorithms } from "../components/algorithms";

const AlgorithmPage = () => {
  const { algorithmKey } = useParams();

  // initialize with default
  let algorithm: Algorithm = algorithms[0];

  if (algorithmKey) {
    algorithm = algorithms[algorithmKey.split("-")[0]];
  }

  const sortOrders = useGetSortOrders();

  return algorithm ? (
    <main>
      <h1>{algorithm.name} Sort</h1>
      <Options pageType="other" />
      <div>
        <table className="single-column">
          <tbody>
            {Object.values(sortOrders).map((sortOrder) => (
              <tr key={sortOrder.key}>
                <td className="single-column">
                  <h3>{sortOrder.name}</h3>
                  <Board
                    key={`${algorithm.name}:${sortOrder.key}`}
                    algorithm={algorithm}
                    sortOrder={sortOrder}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  ) : (
    <div>No algorithm</div>
  );
};

export default AlgorithmPage;
