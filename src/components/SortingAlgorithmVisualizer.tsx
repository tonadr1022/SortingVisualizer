import {
  Column,
  HandleBoardSolveParams,
  HandleBoardResetParams,
} from "../interfaces/interfaces";
import selectionSort from "../sortingAlgorithms.ts/selectionSort";
import insertionSort from "../sortingAlgorithms.ts/insertionSort";
import bubbleSort from "../sortingAlgorithms.ts/bubbleSort";
import heapSort from "../sortingAlgorithms.ts/heapSort";
import {
  useGetFewUniqueColumns,
  useGetNearlySortedColumns,
  useGetRandomColumns,
  useGetReverseColumns,
} from "../utils/getInitialColumns";
import Board from "./ui/Board";

const SortingAlgorithmVisualizer = () => {
  const randomColumns = useGetRandomColumns();
  const reversedColumns = useGetReverseColumns();
  const nearlySortedColumns = useGetNearlySortedColumns();
  const fewUniqueColumns = useGetFewUniqueColumns();

  const sortOrderColumns: { [key: string]: Column[] } = {
    random: randomColumns,
    reversed: reversedColumns,
    nearlySorted: nearlySortedColumns,
    fewUnique: fewUniqueColumns,
  };
  const handleBoardReset = ({
    setBoard,
    sortOrderKey,
  }: HandleBoardResetParams) => {
    const columns: Column[] = sortOrderColumns[sortOrderKey];

    setBoard((prevBoard) => ({ ...prevBoard, columns }));
  };

  const handleBoardSolve = ({
    setBoard,
    sortFunction,
    sortOrderKey,
  }: HandleBoardSolveParams) => {
    const columns = sortOrderColumns[sortOrderKey];

    setBoard((prevBoard) => {
      const updatedBoard = {
        ...prevBoard,
        columns: JSON.parse(JSON.stringify(columns)),
      };
      sortFunction({
        board: updatedBoard,
        setBoard,
      });
      return updatedBoard;
    });
  };

  const sortOrders = [
    {
      key: "random",
      name: "Random",
      getColumnsFunction: useGetRandomColumns,
      initialColumns: randomColumns,
    },
    {
      key: "reversed",
      name: "Reversed",
      getColumnsFunction: useGetReverseColumns,
      initialColumns: reversedColumns,
    },
    {
      key: "nearlySorted",
      name: "Nearly Sorted",
      getColumnsFunction: useGetNearlySortedColumns,
      initialColumns: nearlySortedColumns,
    },
    {
      key: "fewUnique",
      name: "Few Unique",
      getColumnsFunction: useGetFewUniqueColumns,
      initialColumns: fewUniqueColumns,
    },
  ];

  const algorithms = [
    { name: "Selection", sortFunction: selectionSort },
    { name: "Insertion", sortFunction: insertionSort },
    { name: "Bubble", sortFunction: bubbleSort },
    { name: "Heap", sortFunction: heapSort },
  ];
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {sortOrders.map((sortOrder) => (
            <th>{sortOrder.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {algorithms.map((algorithm) => (
          <tr key={algorithm.name}>
            <th>{algorithm.name}</th>
            {sortOrders.map((sortOrder) => (
              <td>
                <Board
                  handleBoardReset={handleBoardReset}
                  key={`${algorithm.name}:${sortOrder.key}`}
                  algorithmName={algorithm.name}
                  sortOrderName={sortOrder.name}
                  sortOrderKey={sortOrder.key}
                  handleBoardSolve={handleBoardSolve}
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
