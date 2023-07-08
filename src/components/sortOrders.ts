import { SortOrder } from "../interfaces/interfaces";
import {
  useGetFewUniqueColumns,
  useGetNearlySortedColumns,
  useGetRandomColumns,
  useGetReverseColumns,
} from "../utils/getInitialColumns";

interface SortOrders {
  [key: string]: SortOrder;
}
export const useGetSortOrders = (): SortOrders => {
  const randomColumns = useGetRandomColumns();
  const reversedColumns = useGetReverseColumns();
  const nearlySortedColumns = useGetNearlySortedColumns();
  const fewUniqueColumns = useGetFewUniqueColumns();
  return {
    random: {
      key: "random",
      name: "Random",
      getColumnsFunction: useGetRandomColumns,
      initialColumns: randomColumns,
    },
    reversed: {
      key: "reversed",
      name: "Reversed",
      getColumnsFunction: useGetReverseColumns,
      initialColumns: reversedColumns,
    },
    nearlySorted: {
      key: "nearlySorted",
      name: "Nearly Sorted",
      getColumnsFunction: useGetNearlySortedColumns,
      initialColumns: nearlySortedColumns,
    },
    fewUnique: {
      key: "fewUnique",
      name: "Few Unique",
      getColumnsFunction: useGetFewUniqueColumns,
      initialColumns: fewUniqueColumns,
    },
  };
};
