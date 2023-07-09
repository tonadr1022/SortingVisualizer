import { algorithms } from "./algorithms";
import Board from "./ui/Board";
import { useGetSortOrders } from "./sortOrders";
import { useNavigate } from "react-router";

const SortingAlgorithmVisualizer = () => {
  const sortOrders = useGetSortOrders();
  const navigate = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {Object.values(sortOrders).map((sortOrder) => (
            <th
              style={{ padding: 0, whiteSpace: "normal" }}
              key={sortOrder.name}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/sorts/${sortOrder.key}`);
              }}>
              {sortOrder.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.values(algorithms).map((algorithm) => (
          <tr key={algorithm.name}>
            <th
              onClick={(e) => {
                e.preventDefault();
                navigate(`/algorithms/${algorithm.key}-sort`);
              }}>
              {algorithm.name}
            </th>
            {Object.values(sortOrders).map((sortOrder) => (
              <td
                key={`${algorithm.name}:${sortOrder.key}`}
                style={{ height: "80px" }}>
                <Board algorithm={algorithm} sortOrder={sortOrder} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SortingAlgorithmVisualizer;
