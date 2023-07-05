import { algorithms } from "./algorithms";
import Board from "./ui/Board";
import { useGetSortOrders } from "./sortOrders";
import { Link } from "react-router-dom";

const SortingAlgorithmVisualizer = () => {
  const sortOrders = useGetSortOrders();

  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {Object.values(sortOrders).map((sortOrder) => (
            <th key={sortOrder.name}>{sortOrder.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(algorithms).map((algorithm) => (
          <tr key={algorithm.name}>
            <Link to={`/algorithms/${algorithm.key}-sort`}>
              <th>{algorithm.name}</th>
            </Link>
            {Object.values(sortOrders).map((sortOrder) => (
              <td key={`${algorithm.name}:${sortOrder.key}`}>
                <Board
                  algorithmName={algorithm.name}
                  sortOrderName={sortOrder.name}
                  sortOrderKey={sortOrder.key}
                  sortFunction={algorithm.sortFunction}
                  initialColumns={sortOrder.initialColumns}
                />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortingAlgorithmVisualizer;
