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
      <table className="single-column-table" style={{ flexGrow: 1 }}>
        <tbody>
          {Object.values(sortOrders).map((sortOrder) => (
            <tr key={sortOrder.key}>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "200px",
                }}>
                <h3 style={{ width: "5em", textAlign: "center" }}>
                  {sortOrder.name}
                </h3>
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
    </main>
  ) : (
    <div>No algorithm</div>
  );
};

export default AlgorithmPage;
